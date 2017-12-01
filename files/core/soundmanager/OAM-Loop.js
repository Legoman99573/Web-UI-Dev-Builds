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

openaudio.loop = function(url, defaultTime) {
    if (!closedwreason) {
        soundManager.stop("loop_" + randomID);
        soundManager.destroySound("loop_" + randomID);
        var loopnu = soundManager.createSound({
            id: "loop_" + randomID,
            volume: volume,
            url: url,
            from: defaultTime * 1000,
            stream: true
        });

        function loopSound(sound) {
            sound.play({
                onfinish: function () {
                    loopSound(sound);
                },
                onerror: function (code, description) {
                    soundManager._writeDebug("loop_" + randomID + " failed?", 3, code, description);
                    if (this.loaded) {
                        openaudio.stopLoop();
                    } else {
                        soundManager._writeDebug("Unable to decode loop_" + randomID + ". Well shit.", 3);
                    }
                }
            });
        }

        if (!closedwreason) {
            loopSound(loopnu);
        } else {
            console.error("[OpenAudio] An error has occured while loading this function.");
        }
    } else {
        console.error("[OpenAudio] An error has occured while loading this function.");
    }
};

openaudio.stopLoop = function() {
    fadeIdOut("loop_" + randomID);
};