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

langpack = {};
langpack.hue = {};
langpack.message = {};
langpack.notification = {};


langpack.message.devbuild = "This server is using a Development Build! Some functions may or may not work.";
langpack.message.welcome = "Connected as %name%! Welcome!";
langpack.message.notconnected = "You're not connected to the server...";
langpack.message.server_is_offline = "Server is offline.";
langpack.message.inavlid_url = "Invalid url.";
langpack.message.invalid_connection = "Invalid connection!";
langpack.message.reconnect_prompt = "Sorry but your url is not valid  Please request a new url via <b>/audio</b> or <b>/connect</b>.";
langpack.message.socket_closed = "Disconnected from the server, please wait";
langpack.message.mobile_qr = "Qr code for mobile client";
langpack.message.listen_on_soundcloud = "Listen on soundcloud!";
langpack.message.clypit_url = "<h2>Uh oh</h2> <h3>Clyp.it is no longer supported! <b>Do not ask for support.</b></h3>";
langpack.message.spotify_url = "<h2>Uh oh</h2> <h3>Spotify links do not currently work. <b>Support is coming soon™</b></h3>";
langpack.message.minime_disabled = "<h2>Minimi is disabled by the server admin.</h2>";
langpack.message.debugger_off = "<h2>Debugger is only available on development builds.</h2>";
langpack.message.easter_egg = "<h2>You found an EasterEgg.</h2><h3>Now listen to the torture >:)</h3>";

langpack.notification.header = "OpenAudioMc | %username%";
langpack.notification.img = 'files/images/footer_logo.png';

langpack.hue.disabled = "philips hue lights are disabled by the server admin!";
langpack.hue.please_link = "<h2>Philips HUE bridge detected!</h2><h3>Please press the link button!</h3>";
langpack.hue.connecting = "<h2>Connecting to hue bridge...</h2>";
langpack.hue.re_search_bridge = "<h2>No philips hue bridge found</h2><h4>Searching for a hue bridge in your network...</h4>";
langpack.hue.cant_connect = "<h2>Could not connect to hue bridge</h2>";
langpack.hue.not_found = "<h2>No philips hue bridge found</h2>";
langpack.hue.connected_with_bridge = "<h3>You are now connected with your %bridgename% bridge. Have fun!</h3>";
langpack.hue.ssl_error = "<h2>There is no support over a secure connection :(</h2><h4>Phillips HUE support is automatically disabled.</h4>";
langpack.hue.direct_ip_prompt = "<h2>Please input your bridge IP</h2>";
langpack.hue.direct_ip_prompt_empty = "<h2>Please enter a Bridge IP</h2>";
langpack.hue.direct_ip_lookup = "<h2>Attempting to connect to bridge IP %ip%...</h2>";
langpack.hue.direct_ip_lookup_success = "<h2>Found bridge IP %ip%</h2><h3>Connecting...</h3>";
langpack.hue.direct_ip_lookup_failed = "<h2>Failed to connect to bridge IP %ip%...</h2>";
langpack.hue.light_data_fail = "<h2>Unable to retrieve Light Data.</h2><h3>Press <b>F5</b> to refresh</h3>";


var openaudio = {};
var socketIo = {};
var apijson = {"ver":"1.0","clientJS":"https://craftmendserver.eu:3000/socket.io/socket.io.js","socket":"https://craftmendserver.eu:3000/","secureSocket":"https://craftmendserver.eu:3000/"};
var ui = {};
var fadingData = {};
var stopFading = {};
var isFading = {};
var volume = 20;
var FadeEnabled = true;
var hue_connected = {};
var MyHue = new huepi();
var HueDefaultColor = "rgba(255	,255,255,150)";
var isHueOn = true;
var HueTestTry = 0;
var hue_lights = {};
var hue_enabled = false;
var StopHueLoop = false;
var hue_start_animation = true;
var audio = [];
var ambiance = "";
var twitter = "";
var youtube = "";
var website = "";
var iconcolor = "#242424";
var ambtimer = 0;
var ambdelay = 800;
var minimeon = false;
var lastSpeakerVolume = 0;
var development = true;
var hue_set = false;
var direct = true;
var connecting = true;
var queueplaying = false;
var Queue_List = {};
var loop = false;

openaudio.color = function(code) {
    $("#footer").animate({
        "background-color": code
    }, {
        duration: 1000
    });
    $("#box").animate({
        "background-color": code
    }, {
        duration: 500
    });
};

openaudio.decode = function(msg) {

    if (msg.includes("clyp.it")) {
        soundManager._writeDebug("Clyp.it is no longer supported! Do not ask for support.", 2);
        swal(langpack.message.clypit_url, "error");
        return;
    }

    if (msg.includes("spotify.com")) {
        soundManager._writeDebug("Spotify links do not work. Support is coming soon™.", 2);
        swal(langpack.message.spotify_url, "error");
        return;
    }

    request = JSON.parse(msg);
    if (request.command == "play_normal") {
        if (request.src.includes("soundcloud.com")) {
            var scurl = request.src;
            getSoundcloud(scurl, function(newurl) {
                request.src = newurl;
                openaudio.play(request.src);
            });
        } else if (request.src.includes("youtube.com")) {
            var youtubeId = request.src.split("?v=");
            openaudio.play(getYoutbe(youtubeId[1]));
        } else {
            openaudio.play(request.src);
        }
    } else if (request.command == "stop") {
        openaudio.playAction("stop");
        try {
            openaudio.stopPlay();
        } catch (e) {}
        try {
            openaudio.stopLoop('loop');
        } catch (e) {}
        try {
            AutoDj.stopPlaylist('AutoDj');
        } catch (e) {}
        try {
            loadedsound.stop();
        } catch (e) {}
    } else if (request.command == "custom") {
        var str = request.string;
        console.log("Custom json for developers: " + str);
    } else if (request.command == "loadmod") {
        if (request.type == "css") {
            addCss(request.src);
        } else if (request.type == "js") {
            addJs(request.src);
        }
    } else if (request.command == "playlist") {
        try {
            AutoDj.stopPlaylist();
        } catch (e) {}
        var myStringArray = request.array;
        var arrayLength = myStringArray.length;
        PlayList_songs = {};
        for (var i = 0; i < arrayLength; i++) {
            var song = myStringArray[i];
            if (song.includes("soundcloud.com")) {
                var scurl2 = request.src;
                AutoDj.AddSong(getSoundcloud(scurl2, song));
            }
            // YouTube Integration
            if (song.includes("youtube.com")) {
                if (song.includes("list=")) {
                    curl = song.toString().split('list=')[1];
                    getYouTubePlaylist(curl);
                } else if (song.includes("v=")) {
                    curl = song.toString().split('?v=')[1];
                    AutoDj.AddSong("https://oayt-delivery.snowdns.de/?name=" + mcname + "&server=" + clientID + "&v=" + curl);
                }
            } else {
                AutoDj.AddSong(song);
            }
        }
        AutoDj.AddedCount = 1;
        AutoDj.IdOfNowPlaying = 0;
        AutoDj.LoadAll();
        AutoDj.PlayNext();
    } else if (request.command == "message") {
        //Browser messages
        openaudio.message(request.string);
    } else if (request.command == "speaker") {
        if (request.type == "add") {
            if (request.src.includes("soundcloud.com")) {
                var scurl = request.src;
                getSoundcloud(scurl, function (newurl) {
                    openaudio.newspeaker(newurl, request.time, request.volume);
                });
            } else if (request.src.includes("youtube.com")) {
                var youtubeId = request.src.split("?v=");
                openaudio.newspeaker(getYoutbe(youtubeId[1]), request.time, request.volume);
        	} else if (request.src.includes("youtu.be")) {
                var youtubeId = request.src.split("/");
                openaudio.newspeaker(getYoutbe(youtubeId[3]), request.time, request.volume);
			}
        	else {
                openaudio.newspeaker(request.src, request.time, request.volume);
            }
        } else if (request.type == "volume") {
            for (var i = 0; i < listSpeakerSounds().split(',').length; i++) {
                listSpeakerSounds().split(',')[i] = listSpeakerSounds().split(',')[i].replace(/^\s*/, "").replace(/\s*$/, "");
                if ((listSpeakerSounds().split(',')[i].indexOf("speaker_") !== -1)) {
                    fadeSpeaker2(listSpeakerSounds().split(',')[i], request.volume);
                    lastSpeakerVolume = request.volume;
                }
            }
        } else if (request.type == "stop") {
            openaudio.removeSpeaker("speaker");
        } else if (request.type == "stopall") {
            openaudio.removeSpeaker("speaker");
        }
    } else if (request.command == "skipto") {
        //skip to
        openaudio.skipTo(request.id, request.timeStamp);
    } else if (request.command == "setvolumeid") {
        openaudio.set_directed_volume(request.id, request.volume);
    } else if (request.command == "forcevolume") {
        openaudio.set_volume(request.volume);
    } else if (request.command == "play_normal_id") {
        if (request.src.includes("soundcloud.com")) {
            var scurl = request.src;
            getSoundcloud(scurl, function(newurl) {
                openaudio.play(newurl, request.id, request.time);
            });
        } // YouTube Integration Start
        else if (request.src.includes("youtube.com")) {
            var youtubeId = request.src.split("?v=");
        	openaudio.play(getYoutbe(youtubeId[1]), request.id, request.time);
		} else if (request.src.includes("youtu.be")) {
            var youtubeId = request.src.split("/");
            openaudio.play(getYoutbe(youtubeId[1]), request.id, request.time);
        } // YouTube Integration End
        else {
            openaudio.play(request.src, request.id, request.time);
        }
    } else if (request.command == "stop_id") {
        openaudio.stop_id(request.id);
    } else if (request.command == "toggle") {
        //I KNOW TOOGLE IS A TYPO
        openaudio.toogle_id(request.id);
    } else if (request.command == "loop") {
        if (request.src.includes("soundcloud.com")) {
            var scurl = request.src;
            getSoundcloud(scurl, function(newurl) {
                openaudio.loop(newurl);
            });
        } // YouTube Integration Start
         else if (request.src.includes("youtube.com")) {
            var youtubeId = request.src.split("?v=");
            openaudio.loop(getYoutbe(youtubeId[1]));
		} else if (request.src.includes("youtu.be")) {
            var youtubeId = request.src.split("/");
            openaudio.loop(getYoutbe(youtubeId[1]));
		} // YouTube Integration End
		else {
            openaudio.loop(request.src);
        }
    } else if (request.type == "region") {
        //TODO: REGION HANDLER

        if (request.command == "startRegion") {
            if (request.src.includes("soundcloud.com")) {
                var scurl = request.src;
                getSoundcloud(scurl, function(newurl) {
                    request.src = newurl;
                    openaudio.playRegion(request.src, request.time, request.id);
                });
            } // YouTube Integration Start
            else if (request.src.includes("youtube.com")) {
                var youtubeId = request.src.split("?v=");
                openaudio.playRegion(getYoutbe(youtubeId[1]), request.time, request.id);
			} else if (request.src.includes("youtu.be")) {
                var youtubeId = request.src.split("/");
                openaudio.playRegion(getYoutbe(youtubeId[1]), request.time, request.id);
			} // YouTube Integration End
			else {
                openaudio.playRegion(request.src, request.time, request.id);
            }
        } else if (request.command == "stopOldRegion") {
            try {
                AutoDj.stopPlaylist();
            } catch (e) {}
            try {
                openaudio.stopRegion(request.id);
            } catch (e) {}
        } else {
            try {
                AutoDj.stopPlaylist();
            } catch (e) {}
            try {
                openaudio.regionsStop();
            } catch (e) {}
        }
    } else if (request.command == "volume") {
        fadeAllTarget(request.volume);
    } else if (request.type == "buffer") {
        if (request.command == "play") {
            openaudio.playbuffer();
        } else if (request.command == "create") {

            if (request.src.includes("soundcloud.com")) {
                var scurl = request.src;
                getSoundcloud(scurl, function(newurl) {
                    openaudio.createBuffer(newurl);
                });
            } // YouTube Integration Start
            else if (request.src.includes("youtube.com")) {
                var youtubeId = request.src.split("?v=");
                openaudio.createBuffer(getYoutbe(youtubeId[1]));
			} else if (request.src.includes("youtu.be")) {
                var youtubeId = request.src.split("/");
            	openaudio.createBuffer(getYoutbe(youtubeId[1]));
			} // YouTube Integration End
			else {
                openaudio.createBuffer(request.src);
            }
        }
    } else if (request.command == "hue") {
        if (request.type == "set") {
            var values = request.target.split(':');
            var colorcode = values[0];
            try {
                //light is specified
                var light = values[1];
                hue_set_color(colorcode, light);
            } catch (e) {
                //no light code
                hue_set_color(colorcode);
            }
        } else if (request.type == "reset") {
            hue_set_color(HueDefaultColor);
        } else if (request.type == "blink") {
            for (var key in MyHue.Lights) {
                if (MyHue.Lights.hasOwnProperty(key)) {
                    if (hue_lights[key].enabled) {
                        MyHue.LightAlertLSelect(key);
                    }
                }
            }
        } else if (request.type == "cyclecolors") {
            for (var key in MyHue.Lights) {
                if (MyHue.Lights.hasOwnProperty(key)) {
                    if (hue_lights[key].enabled) {
                        MyHue.LightEffectColorloop(key);
                    }
                }
            }
        } else if (request.type == "stop") {
            for (var key in MyHue.Lights) {
                if (MyHue.Lights.hasOwnProperty(key)) {
                    if (hue_lights[key].enabled) {
                        MyHue.LightAlertNone(key);
                        MyHue.LightEffectNone(key);
                    }
                }
            }
        }
    } else if (request.command == "setbg") {
        if (request.type == "set") {
            document.body.background = request.target;
        } else if (request.type == "reset") {
            document.body.background = "";
        }
    }
};

openaudio.whisper = function(message) {
    socket.emit("whisperToServer" , message);
    console.info("[Socket.io] Whisper send.");
};

socketIo.log = function(data) {
    console.info("[Socket.Io] " + data);
};

openaudio.skipTo = function(id, timeInS) {
    openaudio.setIdAtribute(id, function(fullID) {
        var s = parseInt(timeInS);
        var t = s * 1000;
        soundManager.setPosition(fullID, t);
    });
};

openaudio.message = function(text) {
    if (window.location.protocol == "https:") {
        if (Notification.permission !== "granted") {
            Notification.requestPermission();
        } else {
            var notification = new Notification(langpack.notification.header.replace(/%username%/g, mcname), {
                icon: langpack.notification.img,
                body: text,
            });
        }
    }
    if (window.location.protocol == "http:"){
        var notification = document.querySelector('.mdl-js-snackbar');
        var data = {
            message: 'New Message: ' + text,
            timeout: 10000
        };
        notification.MaterialSnackbar.showSnackbar(data);
    }
    var notificationsound = soundManager.createSound({
        id: "oa_notification",
        volume: volume / 10,
        url: "files/core/soundmanager/notification.wav"
    });
    notificationsound.play();
};

//goto

function openSmallWindow() {
    swal({
        title: 'Are you sure?',
        text: "Current sounds may stop!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Open mini-audio'
    }).then(function () {
        minime = window.open(document.URL+"&tinyWindow=true", "OpenAudioMc-Mini", "width=561,height=566");
        minime.onload = function() {
            window.location.href = "http://closeme.openaudiomc.net/";
        }
    })
}

function showPlus() {
    console.error("[OpenAudio] [removedMethodError] showPlus() is no longer supported. You will get redirected instead due to an annoying bug in OpenAudio 2.x.");
}

window.onresize = function() {
    if (tinyWindow != "(none)") {
        window.resizeTo(566, 681);
    }

};
window.onclick = function() {
    if (tinyWindow != "(none)") {
        window.resizeTo(566, 681);
    }
};

function openSite() {
    window.open(website);
}

function openYt() {
    window.open(youtube);
}

function openTwitter() {
    window.open(twitter);
}

function dev() {
    if (!(development != true)) {
        var notification = document.querySelector('.mdl-js-snackbar');
        var data = {
            message: langpack.message.devbuild,
            timeout: 10000
        };
        notification.MaterialSnackbar.showSnackbar(data);
    }
}

function soundmanager2_debugger() {
    $('#dialog-soundmanager2').modal('show');
}

function SetDesignColor(code) {
    document.getElementById("box").style = "background-color: " + code + ";";
}


/* Format
    keycode = decodedKey
 */
function keyEvent(key) {

    /* 40 = ArrowDown
       37 = ArrowLeft
    */
    if ((key.keyCode) === 40 || (key.keyCode) === 37) {
        var slider = document.getElementById("slider");
        slider.value = slider.value - 1;
        openaudio.set_volume(slider.value);
        sliderValue(slider.value);
    }

    // 72 = h
    if ((key.keyCode) === 72) {
        if (!(hue_enabled) !== true) {
            openhue();
        }
        else {
            OpenAudioAPI.generateDialog({
                title: 'Philips HUE',
                text: langpack.hue.disabled
            });
        }
    }

    // 77 = m
    if ((key.keyCode) === 77) {
        if (!(minimeon) === true) {
            openSmallWindow();
        } else {
            swal({
                title: 'MiniMe',
                text: langpack.message.minime_disabled
            });
        }
    }

    // 68 = d
    if ((key.keyCode) === 68) {
        if (!(development !== true)) {
            soundmanager2_debugger();
        } else {
            swal({
                title: 'Soundmanager2 Debugger',
                text: langpack.message.debugger_off
            });
        }
    }

    // 76 = l
    if ((key.keyCode) === 76) {
        swal({
            title: 'Easter Egg',
            text: langpack.message.easter_egg
        });
        soundManager.createSound({
            id: "oa_easteregg",
            volume: volume,
            url: "https://oayt-delivery.snowdns.de/?v=m7SNzJx05IE",
            autoPlay: true
        });
    }

    // 73 = i
    if ((key.keyCode) === 73) {
        $('#dialog-mods').modal('show');
    }

    /*
       38 = ArrowUp
       39 = ArrowRight
    */
    if ((key.keyCode) === 38 || (key.keyCode) === 39) {
        var slider = document.getElementById("slider");
        var val = ++slider.value;
        slider.value = val;
        openaudio.set_volume(slider.value);
        sliderValue(slider.value);
    }
}

document.onkeydown = keyEvent;

function loadAllFromJson(pack) {
    var json = JSON.parse(pack);
    var jsfiles = json.js;
    var cssfiles = json.css;
    for (var i = 0; i < jsfiles.length; i++) {
        addJs(jsfiles[i]);
    }
    for (var i2 = 0; i2 < cssfiles.length; i2++) {
        addCss(cssfiles[i2]);
    }
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};



function listSounds() {
    var obj = soundManager.sounds;
    var str = '';
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            if (soundManager.getSoundById(p).metadata.speaker !== true) {
                str += p + ",";
            }
        }
    }
    return str;
}


function openhue() {
    if (hue_enabled != false) {
        hue_menu();
    } else {
        OpenAudioAPI.generateDialog({
            dialogWidth: '70%',
            textTitle: 'Philips HUE',
            htmlContent: 'langpack.hue.disabled'
        });
    }
}

function showqr() {
    swal({
        title: langpack.message.mobile_qr,
        text: '<center><div id="qrcode"></div></center>',
        CancelButton: false,
        allowOutsideClick: true,
        allowEscapeKey: true,
        showConfirmButton: true,
        html: '<center><div id="qrcode"></div></center>'
    }, function() {});
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: document.URL,
        width: 150,
        height: 150,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}


function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) {
        return parts.pop().split(";").shift();
    }
}

function addJs(url) {
    console.info("[ModManager] Attempting to add js file from " + url + ".");
    var extension = url.substr((url.lastIndexOf('.') +1));
    if (!/(js)$/ig.test(extension)) {
        console.error("[ModManager] [Idiot Proof Detection] File is not a JavaScript (.js) file. Not appending to the client.");
        OpenAudioAPI.loadMod(url, "Disabled", "JSMod");
    } else {
        $.getScript(url, function() {
            console.info("[ModManager] Added js file from " + url + " successfully.");
            OpenAudioAPI.loadMod(url, "Enabled", "JSMod");
        });
    }
}

/**
 * @deprecated Since build 1.8 for 3.0. Recommend loading as a JavaScript Web Mod
 */
function addCss(url) {
    console.warn("[ModManager] addCss has been deprecated as of Development Build 1.8. Use OpenAudioAPI.getCSS instead.");
    console.info("[ModManager] Attempting to add css file from " + url + ".");
    var extension = url.substr((url.lastIndexOf('.') +1));
    if (!/(css)$/ig.test(extension)) {
        console.error("[ModManager] [Idiot Proof Detection] File is not a Cascade Style Sheet (.css) file. Not appending to the client.");
        OpenAudioAPI.loadMod(url, "Disabled", "CSSMod");
    } else {
        $('head').append('<link rel="stylesheet" href="' + url + '" type="text/css" />');
        console.info("[ModManager] Added css file from location " + url + " successfully");
        OpenAudioAPI.loadMod(url, "Enabled", "CSSMod");
    }
}

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
};
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for (var i = this.length - 1; i >= 0; i--) {
        if (this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
};

function enable() {
    //setup vars
    status_span = document.getElementById("status-span");
    volume_text = document.getElementById("volume");

    if (getCookie("volume") != null) {
        openaudio.set_volume(getCookie("volume"));
    }

    //setup session data
    var [a, b] = session.split(':');
    clientID = a;
    clientTOKEN = b;

    document.getElementById("skull").src = "https://crafatar.com/avatars/" + mcname + "?overlay";

    // Since its deprecated to use on an insecure connection, we will use Material's version as a workaround fix for it ;)
    if (window.location.protocol == "https:") {
        if (Notification.permission !== "granted") {
            Notification.requestPermission();
        }
    } else if (window.location.protocol == "http:") {
        console.warn("[OpenAudioMC] [illegalException] Notifications only works on secure connection. Using Material's Own Notifications instead.");
    } else {
        console.warn("[OpenAudioMC] [illegalException] Notifications only works on secure connection. Using Material's Own Notifications instead.");
    }

    //connect to the craftmend server
    socketIo.connect();
}