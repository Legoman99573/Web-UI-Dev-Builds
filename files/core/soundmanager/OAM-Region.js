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

openaudio.playRegion = function(url, defaultTime) {
    if (!closedwreason) {
        var randomID = Math.floor(Math.random() * 60) + 1 + "_"; // MultiShot Disabled Fix to still play multiple sounds without ghost audio
        openaudio.stopBackground();
        soundManager.stop("oa_region_" + randomID);
        soundManager.destroySound("oa_region_" + randomID);
        var regionsounds = soundManager.createSound({
            id: "oa_region_" + randomID,
            url: url,
            volume: volume,
            from: defaultTime * 1000,
            stream: true,
            onplay: function () {
                soundManager.getSoundById("oa_region_" + randomID).metadata.region = true;
            }
        });

        function loopSound(sound) {
            sound.play({
                onfinish: function () {
                    loopSound(sound);
                },
                onerror: function (code, description) {
                    soundManager._writeDebug("oa_region_" + randomID + " failed?", 3, code, description);
                    if (this.loaded) {
                        openaudio.stopRegion();
                    } else {
                        soundManager._writeDebug("Unable to decode oa_region_" + randomID + ". Well shit.", 3);
                    }
                }
            });
        }

        if (!closedwreason) {
            loopSound(regionsounds);
        } else {
            console.error("[OpenAudio] An error has occured while loading this function.");
        }
    } else {
        console.error("[OpenAudio] An error has occured while loading this function.");
    }

    openaudio.stopRegion = function() {
        fadeIdOut("oa_region_" + randomID );
    };


    openaudio.regionsStop = function() {
        for (var i = 0; i < listSounds().split(',').length; i++) {
            listSounds().split(',')[i] = listSounds().split(',')[i].replace(/^\s*/, "").replace(/\s*$/, "");
            if (listSounds().split(',')[i].indexOf("oa_region_" + randomID) !== -1) {
                fadeIdOut(listSounds().split(',')[i]);
            }
        }
    };
};