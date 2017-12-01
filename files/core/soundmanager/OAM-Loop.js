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
        var randomID = Math.floor(Math.random() * 60) + 1 + "_"; // MultiShot Disabled Fix to still play multiple sounds without ghost audio

        soundManager.stop("loop_" + randomID);
        soundManager.destroySound("loop_" + randomID);
        var loopnu = soundManager.createSound({
            id: "loop_" + randomID,
            url: url,
            volume: volume,
            autoPlay: true,
            from: defaultTime * 1000,
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
                soundManager._writeDebug("loop_" + randomID + " failed?", 3, code, description);
                if (this.loaded) {
                    openaudio.stopLoop();
                } else {
                    soundManager._writeDebug("Unable to decode loop_" + randomID + ". Well shit.", 3);
                }
            }
        });

        openaudio.stopLoop = function() {
            fadeIdOut("loop_" + randomID);
        };
    } else {
        console.error("[OpenAudio] An error has occured while loading this function.");
    }
};