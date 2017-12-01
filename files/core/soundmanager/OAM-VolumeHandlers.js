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