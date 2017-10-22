/*
 * Copyright (C) 2017 Mindgamesnl
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

socketIo.connect = function() {

    socketIo.log = function(data) {
        console.info("[Socket.Io] " + data);
    };

    socket = io.connect(socket_io, {
        secure: true
    });

    closedwreason = false;
    socket.on('command', function(msg) {
        socketIo.log("Reiceived command.");
        if (msg === "connectionSuccess") {
            $('.name').html(langpack.message.welcome.replace("%name%", mcname));
        } else if (msg === "not_in_server") {
            closedwreason = true;
            $('.name').html(langpack.message.notconnected);
            swal({
                title: 'Looks like you disconnected',
                text: "Run /audio in game, then press reconnect.",
                type: 'error',
                allowOutsideClick: false,
                allowEscapeKey: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Reconnect'
            }).then(function () {
                initialize();
            })
        } else if (msg === "connected") {
            $('.name').html(langpack.message.welcome.replace("%name%", mcname));
        } else {
            openaudio.decode(msg);
        }
    });

    socket.on('oaCss', function(msg) {
        if (msg !== null) {
            var msg = JSON.parse(msg);
            var arrayLength = msg.length;
            for (var i = 0; i < arrayLength; i++) {
                addCss(msg[i]);
            }
        }
    });

    socket.on('oaJs', function(msg) {
        if (msg !== null) {
            var msg = JSON.parse(msg);
            var arrayLength = msg.length;
            for (var i = 0; i < arrayLength; i++) {
                addJs(msg[i]);
            }
        }
    });
    socket.on('oaSettings', function(msg) {
        $( ".mdl-navigation__link" ).remove();
        $( ".mdl-menu__item" ).remove();
        $( ".mods" ).remove();
        $('#js-none').show();
        $('#css-none').show();

        OpenAudioAPI.rightTrayItem({
            onClick: "about();",
            itemName: 'About'
        });

        OpenAudioAPI.rightTrayItem({
            onClick: "bugreport();",
            itemName: "Bug Report"
        });

        OpenAudioAPI.rightTrayItem({
            onClick: "openInNewTab('https://github.com/OpenAudioMc/Web-UI-Dev-Builds');",
            itemName: 'Source Code'
        });

        OpenAudioAPI.rightTrayItem({
            onClick: "openInNewTab('https://discord.gg/b44BPv7');",
            itemName: 'Discord'
        });

        OpenAudioAPI.rightTrayItem({
            onClick: "openInNewTab('https://chrome.google.com/webstore/detail/huegasm-for-philips-hue-l/mbjanbdhcpohhfecjgbdpcfhnnbofooj');",
            itemName: 'Huegasm'
        });

        if (msg !== null) {
            setTimeout(function() {
                if (closedwreason !== true) {
                    var settings = JSON.parse(msg);
                    $("#client-title").text(settings.Title);
                    document.title = settings.Title;
                    addJs("https://rawgit.com/OpenAudioMc/Dev-Build-Language-Packs/master/" + settings.language + ".js");
                    if (settings.asound !== null) {
                        ambiance = settings.asound;
                    } else {
                        ambiance = "";
                    }

                    if (settings.ambdelay !== null) {
                        ambdelay = settings.ambdelay;
                    }

                    if (development === true) {
                        sm_debugger = new trayItem("fa fa-terminal", "soundmanager2_debugger", "SoundManager Debugger");
                    }

                    if (settings.twitter !== "" && settings.twitter !== null) {
                        twitterIcon = new trayItem("fa fa-twitter", "openTwitter", "Twitter");
                        twitter = settings.twitter;
                    }

                    if (settings.minime === "on" || settings.minime !== null) {
                        if (tinyWindow === "(none)") {
                            minimeon = true;
                            minimeicon = new trayItem("fa fa-window-maximize fa-mobile-hide", "openSmallWindow", "Mini Mode");
                        }
                    }

                    if (settings.qrcode !== null && settings.qrcode !== "off") {
                        $.getScript("files/js/qrcode.js", function() {qrbutton = new trayItem("fa fa-qrcode fa-mobile-hide", "showqr", "QR Code");});
                    }

                    if (settings.youtube !== "" && settings.youtube !== null) {
                        youtubeIcon = new trayItem("fa fa-youtube-play", "openYt", "YouTube");
                        youtube = settings.youtube;
                    }
                    if (settings.website !== "" && settings.website !== null) {
                        websiteIcon = new trayItem("fa fa-globe", "openSite", "Our Website");
                        website = settings.website;
                    }
                    if (settings.uicolor !== null && settings.uicolor !== "") {
                        openaudio.color("#" + settings.uicolor);
                        iconcolor = settings.uicolor;
                        document.getElementById("icons").color = "'#" + settings.uicolor + "'";
                        $('#icons').find('i').each(function() {
                            this.style.color = "#" + settings.uicolor
                        });
                    }
                    if (settings.hue !== null && settings.hue !== "off") {
                        $.getScript("files/core/OAM-Hue.js", function() {
                            hueicon = new trayItem("fa fa-lightbulb-o", "openhue", "Philips HUE");
                            hue_enabled = true;
                            if (hue_connected != true) {
                                loop_hue_connection_on_load();
                            } else {
                                openaudio.whisper("hueConnected");
                            }
                        });
                    } else {}
                    if (settings.bg === "") {} else {
                        document.body.background = settings.bg;
                        // Added since CSS ignores what we set in main.css. This will stay its size even on minimize and maximize :D
                        document.body.style = "background-attachment: fixed; background-size: cover; background-repeat: no-repeat";
                    }
                    if (settings.logo === "") {
                        document.getElementById("logo").src = "files/images/footer_logo.png";
                    } else {

                        (function() {
                            var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
                            link.type = 'image/x-icon';
                            link.rel = 'shortcut icon';
                            link.href = settings.logo;
                            document.getElementsByTagName('head')[0].appendChild(link);
                        }());
                        document.getElementById("logo").src = settings.logo;
                    }
                    addJs("https://rawgit.com/OpenAudioMc/WebClient-Updater/master/version.js");
                    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                        swal(
                            'Mobile Browser Detected',
                            'AutoPlay may not work at all. Use a mobile browser, like FireFox App, to hear music. If music plays for this browser. Ignore this message.',
                            'warning'
                        )
                    } else if (window.navigator.userAgent.indexOf("Windows NT 10.0") !== -1) {
                        swal({
                            title: 'Are you sure?',
                            text: "Do you want to use the Windows App made by sneeuw?",
                            type: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Open Windows APP'
                        }).then(function () {
                            openInNewTab("oamc:"+ clientID +"/"+ clientTOKEN +"/"+ mcname);
                        });
                    }
                }
            }, 1000);
        } else {
            closedwreason = true;
            console.error("[OpenAudio] [clientException] This account is unclaimed. Please follow steps to claim account ID:" + clientID);
            $.getScript("files/pages/unclaimedError.js");
        }
    });



    socket.on('oaError', function(msg) {
        socketIo.log("Received error.");
        if (msg === "server-offline") {
            closedwreason = true;
            console.error("[OpenAudioMc][clientException] Exit Code status: 2. Please show in OpenAudioMc Discord https://discord.gg/b44BPv7");
            logInit("clientError 2: Cannot connect to OpenAudio Socket Server.");
            $.getScript("files/pages/serverError.js");
        } else if (msg === "kicked") {
            closedwreason = true;
            console.error("[OpenAudioMc][clientException] Exit Code status: 3. Please show in OpenAudioMc Discord https://discord.gg/b44BPv7");
            logInit("clientError 3: Invalid Session. use /audio or /connect to get a new url link");
            $.getScript("files/pages/urlError.js");
        } else {
            var message = JSON.parse(msg);

            //Whoah, why is thi in the code?
            //So we can ban servers/users who use openaudio for bad things
            //You can remove it if you wanna :3

            if (message.command === "banned") {
                closedwreason = true;
                swal({
                    title: "Oh no, it looks like this server is banned :(",
                    text: "Ban info: " + message.message,
                    showCancelButton: false,
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    showConfirmButton: false,
                    html: "Ban info: " + message.message
                }, function() {});
            }
        }
    });



    socket.on('disconnect', function() {
        socketIo.log("Disconnected!");
        soundManager._writeDebug("Disconnected!", 3);
        $('.name').html(langpack.message.socket_closed);
    });



    socket.on('connect', function() {
        console.info("[Socket.io] Connected!");
        socketIo.log("Connecting as: User: " + mcname + " Id: " + clientID + " Token: " + clientTOKEN);
        closedwreason = false;
        socket.emit("message", '{"type":"client","clientid":"' + clientID + '","user":"' + mcname + '","key":"' + clientTOKEN + '"}');
        socketIo.log("Message send.");
    });
};