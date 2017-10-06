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

openaudio.newspeaker = function(url, defaultTime, requestvol) {
    var randomID = Math.floor(Math.random() * 60) + 1 + "_"; // MultiShot Disabled Fix to still play multiple sounds without ghost audio
    soundManager.stop("speaker_ding_" + randomID);
    soundManager.destroySound("speaker_ding_" + randomID);
    var speakersound = soundManager.createSound({
        id: "speaker_ding_" + randomID,
        url: url,
        volume: 0,
        autoPlay: true,
        from: defaultTime * 1000,
        onplay: function() {
            soundManager.getSoundById("speaker_ding_" + randomID, volume).metadata.speaker = true;
            fadeSpeaker2("speaker_ding_" + randomID, ((requestvol / 100) * volume))
        }, onfinish: function() {
            this.stream = true;
            this.from = 0;
            this.play();
        }, onerror: function(code, description) {
            soundManager._writeDebug("speaker_ding_" + randomID + " failed?", 3, code, description);
            if (this.loaded) {
                openaudio.removeSpeaker();
            } else {
                soundManager._writeDebug("Unable to decode speaker_ding_" + randomID + ". Well shit.", 3);
            }
        }
    });

    openaudio.removeSpeaker = function(id) {
        fadeSpeakerOut("speaker_ding_" + randomID);
        soundManager.destroySound("speaker_ding_" + randomID);
    };
};

//all the fading c
$(document).ready(function() {
    window.fadeIdOut = function(soundId) {
        var x = document.createElement("INPUT");
        x.setAttribute("type", "range");
        document.body.appendChild(x);
        x.id = soundId + "_Slider";
        x.min = 0;
        x.max = 100;
        x.value = volume;
        x.style = "display:none;";
        var backAudio = $('#' + soundId + "_Slider");
        document.getElementById('faders').appendChild(x);

        if (FadeEnabled) {
            isFading[soundId] = true;
            backAudio.animate({
                value: 0
            }, {
                duration: 1000,
                step: function(currentLeft, animProperties) {
                    //call event when a sound started
                    if (stopFading[soundId] !== true) {
                        try {
                            soundManager.setVolume(soundId, currentLeft);
                        } catch (e) {}
                    }
                },
                done: function() {
                    if (stopFading[soundId] !== true) {
                        try {
                            soundManager.stop(soundId);
                            soundManager.destroySound(soundId);
                        } catch (e) {}
                    }
                    isFading[soundId] = false;
                    stopFading[soundId] = false;
                    x.remove();
                }
            });
        } else {
            try {
                soundManager.stop(soundId);
                soundManager.destroySound(soundId);
            } catch (e) {}
            x.remove();
        }
    };

    window.fadeSpeakerOut = function(soundId) {
        var x = document.createElement("INPUT");
        x.setAttribute("type", "range");
        document.body.appendChild(x);
        x.id = soundId + "_Slider";
        x.min = 0;
        x.max = 100;
        x.value = soundManager.getSoundById(soundId.replace(/\oapoint/g, '.').replace(/\oadubblepoint/g, ':').replace(/\oaslas/g, '/')).volume;
        x.style = "display:none;";
        var backAudio = $('#' + soundId + "_Slider");
        document.getElementById('faders').appendChild(x);

        if (FadeEnabled) {
            isFading[soundId] = true;
            backAudio.animate({
                value: 0
            }, {
                duration: 1000,
                step: function(currentLeft, animProperties) {
                    //call event when a sound started
                    if (stopFading[soundId] !== true) {
                        try {
                            soundManager.setVolume(soundId, currentLeft);
                        } catch (e) {}
                    }
                },
                done: function() {
                    if (stopFading[soundId] !== true) {
                        try {
                            soundManager.stop(soundId);
                            soundManager.destroySound(soundId);
                        } catch (e) {}
                    }
                    isFading[soundId] = false;
                    stopFading[soundId] = false;
                    x.remove();
                }
            });
        } else {
            try {
                soundManager.stop(soundId);
                soundManager.destroySound(soundId);
            } catch (e) {}
            x.remove();
        }
    };

    window.fadeSpeaker2 = function(soundId, vt) {

        var volumeTarget = (vt / 100) * volume;
        var x = document.createElement("INPUT");
        x.setAttribute("type", "range");
        document.body.appendChild(x);
        x.id = soundId.replace(/\./g, 'oapoint').replace(/\:/g, 'oadubblepoint').replace(/\//g, 'oaslash') + "_Slider_type_2";
        x.min = 0;
        x.max = 100;
        var randomID = Math.floor(Math.random() * 60) + 1 + "_"; // MultiShot Disabled Fix to still play multiple sounds without ghost audio
        x.value = soundManager.getSoundById("speaker_ding_" + randomID).volume;
        x.style = "display:none;";
        var backAudio = $('#' + soundId.replace(/\./g, 'oapoint').replace(/\:/g, 'oadubblepoint').replace(/\//g, 'oaslash') + "_Slider_type_2");
        document.getElementById('faders').appendChild(x);

        if (FadeEnabled) {
            isFading[soundId] = true;
            backAudio.animate({
                value: volumeTarget
            }, {
                duration: 400,
                step: function(currentLeft, animProperties) {
                    if (stopFading[soundId + "_Slider_type_2"] !== true) {
                        soundManager.setVolume(soundId.replace(/\oapoint/g, '.').replace(/\oadubblepoint/g, ':').replace(/\oaslas/g, '/'), currentLeft);
                    }
                },
                done: function() {
                    isFading[soundId] = false;
                    stopFading[soundId] = false;
                    soundManager.setVolume(soundId.replace(/\oapoint/g, '.').replace(/\oadubblepoint/g, ':').replace(/\oaslas/g, '/'), volumeTarget);
                    x.remove();
                }
            });
        } else {
            soundManager.setVolume(soundId.replace(/\oapoint/g, '.').replace(/\oadubblepoint/g, ':').replace(/\oaslas/g, '/'), volumeTarget);
            x.remove();
        }
    };


    window.fadeIdTarget = function(soundId, volumeTarget) {
        var x = document.createElement("INPUT");
        x.setAttribute("type", "range");
        document.body.appendChild(x);
        x.id = soundId.replace(/\./g, 'oapoint').replace(/\:/g, 'oadubblepoint').replace(/\//g, 'oaslash') + "_Slider_type_2";
        x.min = 0;
        x.max = 100;
        x.value = volume;
        x.style = "display:none;";
        var backAudio = $('#' + soundId.replace(/\./g, 'oapoint').replace(/\:/g, 'oadubblepoint').replace(/\//g, 'oaslash') + "_Slider_type_2");
        document.getElementById('faders').appendChild(x);

        if (FadeEnabled) {
            isFading[soundId] = true;
            backAudio.animate({
                value: volumeTarget
            }, {
                duration: 1000,
                step: function(currentLeft, animProperties) {
                    if (stopFading[soundId + "_Slider_type_2"] !== true) {
                        soundManager.setVolume(soundId.replace(/\oapoint/g, '.').replace(/\oadubblepoint/g, ':').replace(/\oaslas/g, '/'), currentLeft);
                    }
                },
                done: function() {
                    isFading[soundId] = false;
                    stopFading[soundId] = false;
                    soundManager.setVolume(soundId.replace(/\oapoint/g, '.').replace(/\oadubblepoint/g, ':').replace(/\oaslas/g, '/'), volumeTarget);
                    x.remove();
                }
            });
        } else {
            soundManager.setVolume(soundId.replace(/\oapoint/g, '.').replace(/\oadubblepoint/g, ':').replace(/\oaslas/g, '/'), volumeTarget);
            x.remove();
        }
    };

    window.fadeIdOutWithSpeaker = function(soundId) {
        var x = document.createElement("INPUT");
        x.setAttribute("type", "range");
        document.body.appendChild(x);
        x.id = soundId.replace(/\./g, 'oapoint').replace(/\:/g, 'oadubblepoint').replace(/\//g, 'oaslash') + "_Slider_type_2";
        x.min = 0;
        x.max = 100;
        x.value = volume;
        x.style = "display:none;";
        var backAudio = $('#' + soundId.replace(/\./g, 'oapoint').replace(/\:/g, 'oadubblepoint').replace(/\//g, 'oaslash') + "_Slider_type_2");
        document.getElementById('faders').appendChild(x);

        if (FadeEnabled) {
            isFading[soundId] = true;
            backAudio.animate({
                value: 0
            }, {
                duration: 100,
                step: function(currentLeft, animProperties) {
                    //call event when a sound started
                    if (stopFading[soundId] !== true) {
                        try {
                            soundManager.setVolume(soundId.replace(/\oapoint/g, '.').replace(/\oadubblepoint/g, ':').replace(/\oaslas/g, '/'), currentLeft);
                        } catch (e) {}
                    }
                },
                done: function() {
                    if (stopFading[soundId] !== true) {
                        try {
                            soundManager.stop(soundId);
                            soundManager.destroySound(soundId.replace(/\oapoint/g, '.').replace(/\oadubblepoint/g, ':').replace(/\oaslas/g, '/'));
                        } catch (e) {}
                    }
                    isFading[soundId] = false;
                    stopFading[soundId] = false;
                    x.remove();
                }
            });
        } else {
            try {
                soundManager.stop(soundId.replace(/\oapoint/g, '.').replace(/\oadubblepoint/g, ':').replace(/\oaslas/g, '/'));
                soundManager.destroySound(soundId.replace(/\oapoint/g, '.').replace(/\oadubblepoint/g, ':').replace(/\oaslas/g, '/'));
            } catch (e) {}
            x.remove();
        }
    };


    window.fadeIdTargetSpeaker = function(soundId, volumeTarget) {
        var x = document.createElement("INPUT");
        x.setAttribute("type", "range");
        document.body.appendChild(x);
        x.id = soundId.replace(/\./g, 'oapoint').replace(/\:/g, 'oadubblepoint').replace(/\//g, 'oaslash') + "_Slider_type_2";
        x.min = 0;
        x.max = 100;
        x.value = soundManager.getSoundById(soundId).volume;
        x.style = "display:none;";
        var backAudio = $('#' + soundId.replace(/\./g, 'oapoint').replace(/\:/g, 'oadubblepoint').replace(/\//g, 'oaslash') + "_Slider_type_2");
        document.getElementById('faders').appendChild(x);

        if (FadeEnabled) {
            isFading[soundId] = true;
            backAudio.animate({
                value: volumeTarget
            }, {
                duration: 500,
                step: function(currentLeft, animProperties) {
                    if (stopFading[soundId + "_Slider_type_2"] !== true) {
                        soundManager.setVolume(soundId.replace(/\oapoint/g, '.').replace(/\oadubblepoint/g, ':').replace(/\oaslas/g, '/'), currentLeft);
                    }
                },
                done: function() {
                    isFading[soundId] = false;
                    stopFading[soundId] = false;
                    soundManager.setVolume(soundId.replace(/\oapoint/g, '.').replace(/\oadubblepoint/g, ':').replace(/\oaslas/g, '/'), volumeTarget);
                    x.remove();
                }
            });
        } else {
            soundManager.setVolume(soundId.replace(/\oapoint/g, '.').replace(/\oadubblepoint/g, ':').replace(/\oaslas/g, '/'), volumeTarget);
            x.remove();
        }
    };



    window.fadeAllTarget = function(volumeTarget) {
        var x = document.createElement("INPUT");
        x.setAttribute("type", "range");
        document.body.appendChild(x);
        x.id = "global_Slider_type_2";
        x.min = 0;
        x.max = 100;
        x.value = volume;
        x.style = "display:none;";
        var backAudio = $('#' + "global_Slider_type_2");
        document.getElementById('faders').appendChild(x);

        if (FadeEnabled) {
            isFading["global_Slider_type_2"] = true;
            backAudio.animate({
                value: volumeTarget
            }, {
                duration: 1000,
                step: function(currentLeft, animProperties) {
                    if (stopFading["global_Slider_type_2"] !== true) {
                        openaudio.set_volume2(currentLeft);
                    }
                },
                done: function() {
                    isFading["global_Slider_type_2"] = false;
                    stopFading["global_Slider_type_2"] = false;
                    openaudio.set_volume(volumeTarget);
                    x.remove();
                }
            });
        } else {
            openaudio.set_volume(volumeTarget);
            x.remove();
        }
    }
});

function listSpeakerSounds() {
    var obj = soundManager.sounds;
    var str = '';
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            if (soundManager.getSoundById(p).metadata.speaker !== false) {
                str += p + ",";
            }
        }
    }
    return str;
}