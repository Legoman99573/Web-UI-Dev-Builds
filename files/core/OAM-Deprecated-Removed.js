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

/**
 * @ignore
 * @deprecated
 * @description Functions below have been removed
 */



/**
 * @ignore
 * @deprecated Use OpenAudioApi.songNotification instead.
 */
function open_soundcloud() {
    console.error("[OpenAudioMc] [removedMethodError] open_soundcloud() is no longer supported. Use OpenAudioApi.songNotification() instead.")
}

/**
 * @ignore
 * @deprecated You will get redirected instead due to an annoying bug in OpenAudio 2.x.
 */
function showPlus() {
    console.error("[OpenAudio] [removedMethodError] showPlus() is no longer supported. You will get redirected instead due to an annoying bug in OpenAudio 2.x.");
}


// -----------------------------------------------------------------------------------------------------------------

/**
 * @ignore
 * @deprecated
 * @description Functions below have been deprecated and will be removed in the future.
 */



/**
 * @ignore
 * @deprecated Use OpenAudioAPI.getCSS() instead.
 */
function addCss(url) {
    console.warn("[OpenAudio] [deprecatedException] addCss has been deprecated as of Development Build 1.8 due to no detection. Use OpenAudioAPI.getCSS() instead.");
    console.info("[ModManager] Attempting to add css file from " + url + ".");
    $('head').append('<link rel="stylesheet" href="' + url + '" type="text/css" />');
    console.info("[ModManager] Added css file from " + url + " successfully.");
}


/**
 * @ignore
 * @deprecated Use OpenAudioAPI.getJS() instead.
 */
function addJs(url) {
    console.warn("[OpenAudio] [deprecatedException] addJS has been deprecated as of Development Build 1.12 due to no detection. Use OpenAudioAPI.getJS() instead.");
    console.info("[ModManager] Attempting to add js file from " + url + ".");
    $.getScript(url, function() {
        console.info("[ModManager] Added js file from " + url + " successfully.");
    });
}

