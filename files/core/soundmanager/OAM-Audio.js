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

soundManager.setup({
    defaultOptions: {
        onfinish: function() {
            var randomID = Math.floor(Math.random() * 60) + 1 + "_"; // MultiShot Disabled Fix to still play multiple sounds without ghost audio
            handleSoundEnd(this.id);
            soundManager.destroySound(this.id);
            if (this.id != "oa_back_" + randomID) {
                onSoundEnd();
            }
        },
        onplay: function() {
            var randomID = Math.floor(Math.random() * 60) + 1 + "_"; // MultiShot Disabled Fix to still play multiple sounds without ghost audio
            if (this.id != "oa_back_" + randomID) {
                onSoundPlay();
            }
        },
        onstop: function() {
            var randomID = Math.floor(Math.random() * 60) + 1 + "_"; // MultiShot Disabled Fix to still play multiple sounds without ghost audio
            if (this.id != "oa_back_" + randomID) {
                onSoundEnd();
            }
        },
        onerror: function(code, description) {
            var randomID = Math.floor(Math.random() * 60) + 1 + "_"; // MultiShot Disabled Fix to still play multiple sounds without ghost audio
            if (this.id != "oa_back_" + randomID) {
                soundManager._writeDebug("[SoundManager2] oa_back_" + randomID + " failed?", 3, code, description);
                if (this.loaded) {
                    openaudio.stopBackground("oa_back_" + randomID);
                    soundManager.destroySound("oa_back_" + randomID);
                } else {
                    soundManager._writeDebug("Unable to decode oa_back_" + randomID + ". Well shit.", 3);
                }
            }
        }
    }
});

function onSoundPlay() {
    var randomID = Math.floor(Math.random() * 60) + 1 + "_"; // MultiShot Disabled Fix to still play multiple sounds without ghost audio
    if (listSounds().includes("oa_back_" + randomID) && ambiance != "") {
        openaudio.stopBackground();
    }
    try {
        clearTimeout(ambtimer);
    } catch(e) {}
}

function onSoundEnd() {
    ambtimer = setTimeout(function() {
        if (listSounds().length == 0 && ambiance != "") {
            if (ambiance.includes("soundcloud.com")) {
                var scurl = ambiance;
                getSoundcloud(scurl, function(newurl) {
                    openaudio.sartBackground(newurl);
                });
            } else {
                openaudio.sartBackground(ambiance);
            }
        }
    }, ambdelay);
}



function handleSoundEnd(fullId) {
    var id = fullId.split("_")[2];
    if (id != "undefined") {
        var whisper = {};
        whisper.command = "SoundEnded";
        whisper.id = id;
        openaudio.whisper(JSON.stringify(whisper));
    }
}


openaudio.play = function(src_fo_file, soundID, defaultTime) {
    if (soundID === null) {
        soundID = 'default';
    }

    if (defaultTime === null) {
        defaultTime = 0;
    }

    var randomID = Math.floor(Math.random() * 60) + 1 + "_"; // MultiShot Disabled Fix to still play multiple sounds without ghost audio

    var soundId = "play";
    if (isFading[soundId] === true) {
        stopFading[soundId] = true;
    }
    var mySoundObject = soundManager.createSound({
        id: "play_" + randomID + soundID,
        url: src_fo_file,
        volume: volume,
        from: defaultTime,
        autoPlay: true
    });

    openaudio.stopPlay = function(soundID) {

        fadeIdOut("play_" + randomID + soundID);
        soundManager.destroySound("play_" + randomID + soundID);
    }
};

openaudio.sartBackground = function(url) {
    var randomID = Math.floor(Math.random() * 60) + 1 + "_"; // MultiShot Disabled Fix to still play multiple sounds without ghost audio
    soundManager.stop("oa_region_" + randomID);
    soundManager.destroySound("oa_back_" + randomID);
    var regionsound = soundManager.createSound({
        id: "oa_back_" + randomID,
        volume: volume,
        url: url
    });

    function loopSound(sound) {
        sound.play({
            onfinish: function() {
                loopSound(sound);
            },
            onerror: function(code, description) {
                soundManager._writeDebug("oa_back_" + randomID + " failed?", 3, code, description);
                if (this.loaded) {
                    openaudio.stopBackground();
                } else {
                    soundManager._writeDebug("Unable to decode oa_back_" + randomID + ". Well shit.", 3);
                }
            }
        });
    }
    fadeIdTarget("oa_back_" + randomID);
    loopSound(regionsound);

    openaudio.stopBackground = function() {
        fadeIdOut("oa_back_" + randomID);
        soundManager.destroySound("oa_back_" + randomID);
    };
};

openaudio.playAction = function(action_is_fnc) {
    for (var i = 0; i < listSounds().split(',').length; i++) {
        listSounds().split(',')[i] = listSounds().split(',')[i].replace(/^\s*/, "").replace(/\s*$/, "");
        if (listSounds().split(',')[i].indexOf("play_") !== -1) {
            if (action_is_fnc === "stop") {
                fadeIdOut(listSounds().split(',')[i]);
            }
        }
    }
};


openaudio.setGlobalVolume = function(volumeNew) {
    for (var i = 0; i < listSounds().split(',').length; i++) {
        listSounds().split(',')[i] = listSounds().split(',')[i].replace(/^\s*/, "").replace(/\s*$/, "");
        try {
            soundManager.getSoundById(listSounds().split(',')[i]).setVolume(volumeNew);
        } catch (e) {
            //no sounds avalible
        }

    }

    for (var i = 0; i < listSpeakerSounds().split(',').length; i++) {
        listSpeakerSounds().split(',')[i] = listSpeakerSounds().split(',')[i].replace(/^\s*/, "").replace(/\s*$/, "");
        if ((listSpeakerSounds().split(',')[i].indexOf("speaker_") !== -1)) {
            var volumeTarget = (lastSpeakerVolume / 100) * volumeNew;
            soundManager.setVolume(listSpeakerSounds().split(',')[i], volumeTarget);
        }
    }
};

openaudio.setIdAtribute = function(ID, callback) {
    if (!ID.includes("/")) {
        for (var i = 0; i < listSounds().split(',').length; i++) {
            listSounds().split(',')[i] = listSounds().split(',')[i].replace(/^\s*/, "").replace(/\s*$/, "");
            if (listSounds().split(',')[i].indexOf(ID) !== -1 && (listSounds().split(',')[i].indexOf("play_") !== -1 || listSounds().split(',')[i].indexOf("oa_region_") !== -1)) {
                callback(listSounds().split(',')[i])
            }
        }
    } else {
        var string = ID;
        string = string.split("/");
        var stringArray = [];
        for (var loopids = 0; loopids < string.length; loopids++) {
            stringArray.push(string[loopids]);
        }
        stringArray.forEach(function(entry) {
            for (var i = 0; i < listSounds().split(',').length; i++) {
                listSounds().split(',')[i] = listSounds().split(',')[i].replace(/^\s*/, "").replace(/\s*$/, "");
                if (listSounds().split(',')[i].indexOf(entry) !== -1 && (listSounds().split(',')[i].indexOf("play_") !== -1 || listSounds().split(',')[i].indexOf("oa_region_") !== -1)) {
                    callback(listSounds().split(',')[i])
                }

            }
        });
    }
};


openaudio.set_directed_volume = function(volume, ID) {
    var volume = parseInt(volume);
    if (volume > 100) {
        openaudio.setIdAtribute(ID, function(fullID) {
            soundManager.setVolume(fullID, 100);
        });
    } else if (volume < 0) {
        openaudio.setIdAtribute(ID, function(fullID) {
            soundManager.setVolume(fullID, 0);
        });
    } else {
        openaudio.setIdAtribute(ID, function(fullID) {
            soundManager.setVolume(fullID, volume);
        });
    }
};



openaudio.stop_id = function(ID) {
    openaudio.setIdAtribute(ID, function(fullID) {
        fadeIdOut(fullID);
    });
};



openaudio.toogle_id = function(id) {
    openaudio.setIdAtribute(id, function(fullID) {
        soundManager.togglePause(fullID);
    });
};



openaudio.set_volume = function(volume_var) {
    volume_text = document.getElementById("volume");
    if (volume_var > 100) {
        document.getElementById("slider").value = 100;
        openaudio.setGlobalVolume(100);
        volume = 100;
    } else if (volume_var < 0) {
        document.getElementById("slider").value = 0;
        openaudio.setGlobalVolume(0);
        volume = 0;
    } else {
        document.getElementById("slider").value = volume_var;
        volume = volume_var;
        openaudio.setGlobalVolume(volume_var);
    }
};



openaudio.set_volume2 = function(volume_var) {
    if (volume_var > 100) {
        document.getElementById("slider").value = 100;
        openaudio.setGlobalVolume(100);
        volume = 100;
    } else if (volume_var < 0) {
        document.getElementById("slider").value = 0;
        openaudio.setGlobalVolume(0);
        volume = 0;
    } else {
        document.getElementById("slider").value = volume_var;
        volume = volume_var;
        openaudio.setGlobalVolume(volume_var);
    }
};



openaudio.playbuffer = function() {
    try {
        loadedsound.play({
            volume: volume
        });
    } catch (e) {

    }
};



openaudio.createBuffer = function(file_to_load) {
    loadedsound = soundManager.createSound({
        id: 'loader',
        url: file_to_load
    });
    soundManager.load('loader');
    loadedsound.load();
};

//thanks to chrome bugs we need to detect if the browser is actife
var vis = (function() {
    var stateKey,
        eventKey,
        keys = {
            hidden: "visibilitychange",
            webkitHidden: "webkitvisibilitychange",
            mozHidden: "mozvisibilitychange",
            msHidden: "msvisibilitychange"
        };
    for (stateKey in keys) {
        if (stateKey in document) {
            eventKey = keys[stateKey];
            break;
        }
    }
    return function(c) {
        if (c) document.addEventListener(eventKey, c);
        return !document[stateKey];
    }
})();

vis(function() {
    if (vis()) {
        setTimeout(function() {
            FadeEnabled = true;
        }, 300);
    } else {
        openaudio.whisper("eventMinni");
        openaudio.whisper(JSON.stringify("eventMinni"));
        FadeEnabled = false;
    }
});

var notIE = (document.documentMode === undefined),
    isChromium = window.chrome;
if (notIE && !isChromium) {
    $(window).on("focusin", function() {
        setTimeout(function() {
            FadeEnabled = true;
        }, 300);
    }).on("focusout", function() {
        FadeEnabled = false;
    });
} else {
    if (window.addEventListener) {} else {
        window.attachEvent("focus", function(event) {
            setTimeout(function() {
                FadeEnabled = true;
            }, 300);
        });
        window.attachEvent("blur", function(event) {
            FadeEnabled = false;
        });
    }
}