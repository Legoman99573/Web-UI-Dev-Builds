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

document.body.background = "";
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

$('head').html("  <!-- OpenAudioMC by Mindgamesnl -->\n" +
    "\n" +
    "  <!-- Title -->\n" +
    "  <title>OpenAudioMC | urlError</title>\n" +
    "\n" +
    "  <!-- CSS -->\n" +
    "  <link href=\"files/css/error.css\" rel=\"stylesheet\" />\n" +
    "  <link href=\"files/css/material.css\" rel=\"stylesheet\" />\n" +
    "  <link href=\"https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.11.0/sweetalert2.css\" rel=\"stylesheet\" />\n" +
    "  <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\n" +
    "\n" +
    "  <!-- META -->\n" +
    "  <meta http-equiv=\"content-type\" content=\"text/html; charset=UTF-8\">\n" +
    "  <meta charset=\"utf-8\">\n" +
    "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1\" />\n" +
    "\n" +
    "  <!-- ICON -->\n" +
    "  <link rel=\"icon\" href=\"files/images/small_logo.png\" />\n" +
    "  <link rel=\"image\" href=\"files/images/small_logo.png\" />\n" +
    "\n" +
    $.getScript("files/js/material.js") +
    $.getScript("files/js/jquery.js?v=1.5") +
    $.getScript("files/js/version.js") +
    +
        "\n" +
    "  <!-- Wide card with share menu button -->\n" +
    "  <style>\n" +
    "    .demo-card-wide .mdl-card {\n" +
    "      max-width: 512px;\n" +
    "      min-width: 260px;\n" +
    "      width: 100%;\n" +
    "      overflow: auto;\n" +
    "    }\n" +
    "    .demo-card-wide > .mdl-card__title {\n" +
    "      height: 250px;\n" +
    "      width: auto;\n" +
    "      background: url('https://plus.openaudiomc.net/img/plus.png') center / cover;\n" +
    "      background-color: #303030;\n" +
    "    }\n" +
    "   .materialcontainer {\n" +
    "      position: absolute;\n" +
    "      left: 50%;\n" +
    "      top: 50%;\n" +
    "      z-index: 0;\n" +
    "      -webkit-transform: translate(-50%, -50%);\n" +
    "      transform: translate(-50%, -50%);\n" +
    "    }\n" +
    "    #soundmanager-debug {\n" +
    "       display: none !important;\n" +
    "    }\n" +
    "  </style>");

$('body').html("<!-- Uses a header that scrolls with the text, rather than staying locked at the top -->\n" +
    "    <div class=\"materialcontainer\">\n " +
    "      <div class=\"demo-card-wide mdl-card mdl-shadow--2dp\">\n" +
    "         <div class=\"mdl-card__title\">\n" +
    "           <h2 class=\"mdl-card__title-text\"></h2>\n" +
    "         </div>\n" +
    "         <div class=\"mdl-card__supporting-text\">\n" +
    "           <b>This is an invalid URL.</b> \n" +
    "           <br>\n" +
    "           <br>\n" +
    "           Please do not access this website by yourself. Generate your link in game using one of OpenAudio commands <b>(/audio etc.)</b>. \n" +
    "           <br>\n" +
    "           <br>\n" +
    "           If you see this error even if you generated the link, contact us on our Discord!\n" +
    "         </div>\n" +
    "         <div class=\"mdl-card__actions mdl-card--border\">\n" +
    "           <a href=\"https://discord.gg/b44BPv7\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" target=\"_blank\">\n" +
    "             Discord Invite \n" +
    "           </a>\n" +
    "        </div>\n" +
    "      </div>" +
    "    </div>");

if (clientTOKEN !== null && clientID !== null && mcname !== null) {
    setTimeout(function () {
        swal({
            title: 'Your token is invalid',
            text: 'Input new token down below',
            input: 'text',
            showCancelButton: false,
            allowEscapeKey: false,
            confirmButtonText: 'Reconnect',
            showLoaderOnConfirm: true,
            inputValidator: function (value) {
                return new Promise(function (resolve, reject) {
                    if (value) {
                        resolve();
                    } else {
                        reject("Enter a token");
                    }
                })
            },
            allowOutsideClick: false
        }).then(function (result) {
            window.location = "?name=" + mcname + "&session=" + clientID + ":" + result;
        });
    })
}
loadVersion();

function connect_new_token(token) {
    window.location.href = "?name=" + mcname + "&session=" + clientID + ":" + token;
}