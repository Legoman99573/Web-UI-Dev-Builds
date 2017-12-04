/**
 * @copyright 2017 Mindgamesnl
 *
 * @license
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

    // This will determine if we need to bypass server-offline
    if (window.location.href.includes('&offline-bypass=true')) {
        OpenAudioAPI.logging({
            type: 'warn',
            message: 'Connected in development mode. We dont recommend this option for production use.'
        });
        devmode = true;
    }

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
                OpenAudioAPI.getCSS({
                    url: msg[1]
                });
            }
        }
    });

    socket.on('oaJs', function(msg) {
        if (msg !== null) {
            var msg = JSON.parse(msg);
            var arrayLength = msg.length;
            for (var i = 0; i < arrayLength; i++) {
                OpenAudioAPI.getJS({
                    url: msg[i]
                })
            }
        }
    });
    socket.on('oaSettings', function(msg) {
        $( ".mdl-navigation__link" ).remove();
        $( ".right-menu" ).remove();
        $( ".settings-menu" ).remove();
        $( ".mods" ).remove();
        $('#js-none').show();
        $('#css-none').show();

        if (msg !== null) {
            setTimeout(function() {
                if (closedwreason !== true) {
                    var settings = JSON.parse(msg);
                    $("#client-title").text(settings.Title);
                    document.title = settings.Title;
                    localStorage.DefaultLanguage = settings.language;

                    if (localStorage.PrimaryColor && localStorage.SecondaryColor) {
                        $('link[title="main"]').attr('href', 'https://code.getmdl.io/1.3.0/material.' + localStorage.PrimaryColor + '-' + localStorage.SecondaryColor + '.min.css');
                        OpenAudioAPI.logging({
                            type: 'log',
                            message: "Loading Primary and secondary colors based on client settings."
                        });
                    } else if (!localStorage.PrimaryColor && localStorage.SecondaryColor) {
                        OpenAudioAPI.logging({
                            type: 'error',
                            errorType: 'settingsException',
                            message: "Primary color has not been set. Primary and Secondary colors will be reset."
                        });
                        delete localStorage.SecondaryColor;
                    } else if (localStorage.PrimaryColor && !localStorage.SecondaryColor) {
                        OpenAudioAPI.logging({
                            type: 'error',
                            errorType: 'settingsException',
                            message: "Secondary color has not been set. Primary and Secondary colors will be reset."
                        });
                        delete localStorage.PrimaryColor;
                    } else {
                        OpenAudioAPI.logging({
                            type: 'log',
                            message: "Loading default colors based on client settings."
                        });
                    }

                    if (localStorage.SetLanguage) {
                        OpenAudioAPI.logging({
                            type: 'log',
                            message: "Loading language " + localStorage.SetLanguage + " based on client settings"
                        });
                        $.getScript("https://rawgit.com/OpenAudioMc/Dev-Build-Language-Packs/master/" + localStorage.SetLanguage + ".js").done(function() {
                            if (!closedwreason) {
                                $('.name').html(langpack.message.welcome.replace("%name%", mcname));
                            } else {
                                $('.name').html(langpack.message.notconnected);
                            }
                            OpenAudioAPI.logging({
                                type: 'log',
                                message: 'Loaded language pack ' + localStorage.SetLanguage
                            });
                        }).fail(function() {
                            OpenAudioAPI.logging({
                                type: 'error',
                                errorType: 'languagePackException',
                                message: "Failed to load " + localStorage.SetLanguage + ". Using Webclient as fail safe."
                            });
                        });
                    } else {
                        OpenAudioAPI.logging({
                            type: 'log',
                            message: "Attempting to load language " + settings.language
                        });
                        $.getScript("https://rawgit.com/OpenAudioMc/Dev-Build-Language-Packs/master/" + settings.language + ".js").done(function() {
                            if (!closedwreason) {
                                $('.name').html(langpack.message.welcome.replace("%name%", mcname));
                            } else {
                                $('.name').html(langpack.message.notconnected);
                            }
                            OpenAudioAPI.logging({
                                type: 'log',
                                message: "Loading language " + settings.language + " based on client settings"
                            });
                        }).fail(function() {
                            OpenAudioAPI.logging({
                                type: 'error',
                                errorType: 'languagePackException',
                                message: "Failed to load " + settings.language + ". Using Webclient as fail safe."
                            });
                        });
                    }

                    // Windows 10 Users
                    if (window.navigator.userAgent.indexOf("Windows NT 10.0") !== -1) {
                        windows_10 = new trayItem("fa fa-windows", 'mobile', 'Windows 10', "Windows 10 App");
                    }

                    if (window.navigator.userAgent.indexOf("android") !== -1) {
                        android = new trayItem("fa fa-android", 'mobile', 'Android', "Android APP");
                    }

                    if (settings.asound !== null) {
                        ambiance = settings.asound;
                    } else {
                        ambiance = "";
                    }

                    if (settings.ambdelay !== null) {
                        ambdelay = settings.ambdelay;
                    }

                    if (development === true) {
                        sm_debugger = new trayItem("fa fa-terminal", "soundmanager2_debugger", "", "SoundManager Debugger");
                    }

                    if (settings.twitter !== "" && settings.twitter !== null) {
                        twitterIcon = new trayItem("fa fa-twitter", "openTwitter", "", "Twitter");
                        twitter = settings.twitter;
                    }

                    if (settings.minime === "on" || settings.minime !== null) {
                        if (tinyWindow === "(none)") {
                            minimeon = true;
                            minimeicon = new trayItem("fa fa-window-maximize fa-mobile-hide", "openSmallWindow", "", "Mini Mode");
                        }
                    }

                    if (settings.qrcode !== null && settings.qrcode !== "off") {
                        $.getScript("files/js/qrcode.js", function() {qrbutton = new trayItem("fa fa-qrcode fa-mobile-hide", "showqr", "", "QR Code");});
                    }

                    if (settings.youtube !== "" && settings.youtube !== null) {
                        youtubeIcon = new trayItem("fa fa-youtube-play", "openYt", "", "YouTube");
                        youtube = settings.youtube;
                    }
                    if (settings.website !== "" && settings.website !== null) {
                        websiteIcon = new trayItem("fa fa-globe", "openSite", "", "Our Website");
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
                            hueicon = new trayItem("fa fa-lightbulb-o", "openhue", "", "Philips HUE");
                            hue_enabled = true;
                            if (hue_connected !== true) {
                                loop_hue_connection_on_load();
                            } else {
                                openaudio.whisper("hueConnected");
                            }
                        });
                    } else {}
                    if (settings.bg === "") {
                        if (localStorage.ThemeURL) {
                            $.ajax({ url: localStorage.ThemeURL }).done(function() {
                                OpenAudioAPI.logging({
                                    type: 'log',
                                    message: 'Loaded theme from client settings.'
                                });
                                document.body.background = localStorage.ThemeURL;
                            }).fail(function() {
                                delete localStorage.ThemeURL;
                                OpenAudioAPI.logging({
                                    type: 'error',
                                    errorType: 'backgroundUrlException',
                                    message: "Failed to load client theme. No default theme set. Will not load background image."
                                });
                            });
                            // Added since CSS ignores what we set in main.css. This will stay its size even on minimize and maximize :D
                            document.body.style = "background-attachment: fixed; background-size: cover; background-repeat: no-repeat";
                        } else {
                            if (!localStorage.defaultTheme) {
                                delete localStorage.defaultTheme;
                            }
                            OpenAudioAPI.logging({
                                type: 'log',
                                message: 'Detected no default background. No background image will be set.'
                            });
                        }
                    } else {
                        if (!localStorage.ThemeURL) {
                            $.ajax({ url: settings.bg }).done(function() {
                                localStorage.defaultTheme = settings.bg;
                                OpenAudioAPI.logging({
                                    type: 'log',
                                    message: 'Detected default background image from server. Applying to background.'
                                });
                                document.body.background = settings.bg;
                            }).fail(function() {
                                if (!localStorage.defaultTheme) {
                                    delete localStorage.defaultTheme;
                                }
                                OpenAudioAPI.logging({
                                    type: 'error',
                                    errorType: 'backgroundUrlException',
                                    message: "Detected default background, but the URL could not be loaded. No default theme will be set."
                                });
                            });
                        } else {
                            $.ajax({ url: settings.bg }).done(function() {
                                localStorage.defaultTheme = settings.bg;
                                OpenAudioAPI.logging({
                                    type: 'log',
                                    message: 'Detected default background image from server, but client has configured a background URL. Attempting to load Client set background.'
                                });
                            }).fail(function() {
                                OpenAudioAPI.logging({
                                    type: 'log',
                                    message: 'Detected broken background image from server, but client has configured a background URL. Attempting to load Client set background.'
                                });
                                delete localStorage.defaultTheme
                            });
                            $.ajax({ url: localStorage.defaultTheme }).done(function() {
                                OpenAudioAPI.logging({
                                    type: 'log',
                                    message: 'Loaded theme from client settings.'
                                });
                                document.body.background = localStorage.ThemeURL;
                            }).fail(function() {
                                delete localStorage.ThemeURL;
                                if (localStorage.defaultTheme) {
                                    OpenAudioAPI.logging({
                                        type: 'error',
                                        errorType: 'backgroundUrlException',
                                        message: "Failed to load client background image. Resetting to default background image."
                                    });
                                    localStorage.defaultTheme = settings.bg;
                                    document.body.background = settings.bg;
                                }
                            })
                        }
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
                    $('.materialcontainer').fadeOut(200);
                    setTimeout(function() {
                        dev();
                        OpenAudioAPI.getJS({
                            url: "https://rawgit.com/OpenAudioMc/WebClient-Updater/master/version.js"
                        });
                        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                            swal(
                                'Mobile Browser Detected',
                                'AutoPlay may not work at all. Use a mobile browser, like FireFox App, to hear music. If music plays for this browser. Ignore this message.',
                                'warning'
                            )
                        }
                    }, 2000);
                    $('.mdl-layout').fadeIn(200);
                }
            }, 1000);
        } else {
            closedwreason = true;
            OpenAudioAPI.logging({
                type: 'error',
                errorType: 'clientException',
                message: "This account is unclaimed. Please follow steps to claim account ID: " + clientID + "."
            });
            $.getScript("files/pages/unclaimedError.js?v=1.1");
        }
    });



    socket.on('oaError', function(msg) {
        socketIo.log("Received error.");
        if (msg === "server-offline") {
            OpenAudioAPI.logging({
                type: 'error',
                errorType: 'clientException',
                message: "Exit Code status: 4. Please show in OpenAudioMc Discord https://discord.gg/b44BPv7"
            });
            logInit("clientError 4: Server appears to be offline.");
            if (!devmode === true) {
                closedwreason = true;
                $.getScript("files/pages/serverError.js");
            }
        } else if (msg === "kicked") {
            OpenAudioAPI.logging({
                type: 'error',
                errorType: 'clientException',
                message: "Exit Code status: 5. Please show in OpenAudioMc Discord https://discord.gg/b44BPv7"
            });
            logInit("clientError 5: Client was kicked most likely due to invalid token.");
            if (!devmode === true) {
                closedwreason = true;
                $.getScript("files/pages/urlError.js?v=1.1");
            }
        } else {
            var message = JSON.parse(msg);

            //Whoah, why is this in the code?
            //So we can ban servers/users who use openaudio for bad things
            //You can remove it if you wanna :3

            if (message.command === "banned") {
                OpenAudioAPI.logging({
                    type: 'error',
                    errorType: 'clientException',
                    message: "Exit Code status: 6. Please show in OpenAudioMc Discord https://discord.gg/b44BPv7"
                });
                logInit("clientError 6: You or the server was banned for the following reason: " + message.message);
                closedwreason = true;
                swal({
                    title: "Oh no, it looks like this server or user is banned :(",
                    text: "Reason: " + message.message,
                    showCancelButton: false,
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    showConfirmButton: false,
                    html: "Reason: " + message.message
                });
            }
        }
    });



    socket.on('disconnect', function() {
        socketIo.log("Disconnected!");
        $('.name').html(langpack.message.socket_closed);
        if (devmode === true) {
            $('.materialcontainer').fadeOut(200);
            $('.mdl-layout').fadeIn(200);
        } else {
            socketclosed = true;
            closedwreason = true;
            swal({
                text: "Lost Connection to Socket.io Server. Reconnecting...",
                showCancelButton: false,
                allowOutsideClick: false,
                allowEscapeKey: false,
                showConfirmButton: false
            });
        }
    });



    socket.on('connect', function() {
        console.info("[Socket.io] Connected!");
        socketIo.log("Connecting as: User: " + mcname + " Id: " + clientID + " Token: " + clientTOKEN);
        closedwreason = false;
        socketclosed = false;
        socket.emit("message", '{"type":"client","clientid":"' + clientID + '","user":"' + mcname + '","key":"' + clientTOKEN + '"}');
        socketIo.log("Message send.");
        swal.close();
    });
};