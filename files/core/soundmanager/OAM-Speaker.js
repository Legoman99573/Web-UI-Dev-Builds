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

openaudio.newspeaker = function(url, defaultTime, requestvol) {
    if (!closedwreason) {
        var randomID = Math.floor(Math.random() * 60) + 1 + "_"; // MultiShot Disabled Fix to still play multiple sounds without ghost audio
        soundManager.stop("speaker_ding_" + randomID);
        soundManager.destroySound("speaker_ding_" + randomID);
        var speakersound = soundManager.createSound({
            id: "speaker_ding_" + randomID,
            url: url,
            volume: 0,
            autoPlay: true,
            from: defaultTime * 1000,
            onplay: function () {
                soundManager.getSoundById("speaker_ding_" + randomID, volume).metadata.speaker = true;
                fadeSpeaker2("speaker_ding_" + randomID, ((requestvol / 100) * volume))
            }, onfinish: function () {
                if (!closedwreason) {
                    this.stream = true;
                    this.from = 0;
                    this.play();
                } else {
                    console.error("[OpenAudio] An error has occured while loading this function.");
                }
            }, onerror: function (code, description) {
                soundManager._writeDebug("speaker_ding_" + randomID + " failed?", 3, code, description);
                if (this.loaded) {
                    openaudio.removeSpeaker();
                } else {
                    soundManager._writeDebug("Unable to decode speaker_ding_" + randomID + ". Well shit.", 3);
                }
            }
        });
    } else {
        console.error("[OpenAudio] An error has occured while loading this function.");
    }

    openaudio.removeSpeaker = function(id) {
        fadeSpeakerOut("speaker_ding_" + randomID);
    };
};