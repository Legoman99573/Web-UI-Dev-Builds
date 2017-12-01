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

soundManager.setup({
    defaultOptions: {
        onfinish: function() {
            var randomID = Math.floor(Math.random() * 60) + 1 + "_"; // MultiShot Disabled Fix to still play multiple sounds without ghost audio
            handleSoundEnd(this.id);
            soundManager.destroySound(this.id);
            if (this.id !== "oa_back_" + randomID) {
                onSoundEnd();
            }
        },
        onplay: function() {
            var randomID = Math.floor(Math.random() * 60) + 1 + "_"; // MultiShot Disabled Fix to still play multiple sounds without ghost audio
            if (this.id !== "oa_back_" + randomID) {
                onSoundPlay();
            }
        },
        onstop: function() {
            var randomID = Math.floor(Math.random() * 60) + 1 + "_"; // MultiShot Disabled Fix to still play multiple sounds without ghost audio
            if (this.id !== "oa_back_" + randomID) {
                onSoundEnd();
            }
        },
        onerror: function(code, description) {
            var randomID = Math.floor(Math.random() * 60) + 1 + "_"; // MultiShot Disabled Fix to still play multiple sounds without ghost audio
            if (this.id !== "oa_back_" + randomID) {
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
    if (listSounds().includes("oa_back_" + randomID) && ambiance !== "") {
        openaudio.stopBackground();
    }
    try {
        clearTimeout(ambtimer);
        openaudio.stopBackground();
    } catch(e) {}
}

function onSoundEnd() {
    ambtimer = setTimeout(function() {
        if (listSounds().length === 0 && ambiance !== "") {
            if (ambiance.includes("soundcloud.com")) {
                var scurl = ambiance;
                getSoundcloud(scurl, function (newurl) {
                    openaudio.sartBackground(newurl);
                });
            } else if (ambiance.includes("youtube.com")) {
                var youtubeId = request.src.split("?v=");
                openaudio.sartBackground(getYoutbe(youtubeId));
            } else if (ambiance.includes("youtu.be")) {
                var youtubeId = ambiance.split('youtu.be/');
                openaudio.sartBackground(getYoutbe(youtubeId));
            } else if (ambiance.includes("stackstorage.com/s/")) {
                openaudio.sartBackground(getStackStorage(ambiance));
            } else {
                openaudio.sartBackground(ambiance);
            }
        }
    }, ambdelay);
}



function handleSoundEnd(fullId) {
    var id = fullId.split("_")[2];
    if (id !== "undefined") {
        var whisper = {};
        whisper.command = "SoundEnded";
        whisper.id = id;
        openaudio.whisper(JSON.stringify(whisper));
    }
}


openaudio.play = function(src_fo_file, soundID, defaultTime) {
    if (!closedwreason) {
        var randomID = Math.floor(Math.random() * 60) + 1 + "_";
        if (soundID === null) {
            var songID = randomID;
        } else {
            var songID = soundID;
        }

        if (defaultTime === null) {
            var defaultTime = 0;
        }

        var soundId = "play";
        if (isFading[songID] === true) {
            stopFading[songID] = true;
        }
        var mySoundObject = soundManager.createSound({
            id: "play_" + songID,
            url: src_fo_file,
            volume: volume,
            from: defaultTime,
            autoPlay: true
        });

        openaudio.stopPlay = function () {
            fadeIdOut("play_" + songID);
        }
    } else {
        console.error("[OpenAudio] An error has occured while loading this function.");
    }
}

openaudio.sartBackground = function(url) {
    if (!closedwreason) {
        var randomID = Math.floor(Math.random() * 60) + 1 + "_"; // MultiShot Disabled Fix to still play multiple sounds without ghost audio
        var backgroundSound = soundManager.createSound({
            id: "oa_back_" + randomID,
            volume: volume,
            url: url,
            autoPlay: true,
            onfinish: function () {
                if (!closedwreason) {
                    this.stream = true;
                    this.from = 0;
                    this.play();
                } else {
                    console.error("[OpenAudio] An error has occured while loading this function.");
                }
            },
            onerror: function (code, description) {
                soundManager._writeDebug("oa_back_" + randomID + " failed?", 3, code, description);
                if (this.loaded) {
                    openaudio.stopLoop();
                } else {
                    soundManager._writeDebug("Unable to decode oa_back_" + randomID + ". Well shit.", 3);
                }
            }
        });
        fadeIdTarget("oa_back_" + randomID);

        openaudio.stopBackground = function () {
            fadeIdOut("oa_back_" + randomID);
        };
    } else {
        console.error("[OpenAudio] An error has occured while loading this function.");
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