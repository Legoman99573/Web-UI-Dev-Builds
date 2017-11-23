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

document.body.background = "";

$('head').html("  <!-- OpenAudioMC by Mindgamesnl -->\n" +
    "\n" +
    "  <!-- Title -->\n" +
    "  <title>OpenAudioMC | CloseApp</title>\n" +
    "\n" +
    "  <!-- CSS -->\n" +
    "  <link href=\"files/css/error.css\" rel=\"stylesheet\" />\n" +
    "  <link href=\"files/css/material.css\" rel=\"stylesheet\" />\n" +
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
    "  <!-- JS -->\n" +
    "  <script src=\"files/js/material.js\"></script>\n" +
    "  <script src=\"files/js/jquery.js?v=1.5\"></script>\n" +
    "  <script src=\"files/js/version.js\"></script>\n" +
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
    "    .swal2-container {\n" +
    "       display: none !important;\n" +
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
    "           <b>You have opened an app.</b>\n" +
    "           <br>\n" +
    "           <br>\n" +
    "           You may now close this tab or press Refresh.\n" +
    "         </div>\n" +
    "         <div class=\"mdl-card__actions mdl-card--border\">\n" +
    "           <a href=\""+ window.location.href +"\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\">\n" +
    "             Refresh \n" +
    "           </a>\n" +
    "           <a href=\"https://discord.gg/b44BPv7\" class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\" target=\"_blank\">\n" +
    "             Discord Invite \n" +
    "           </a>\n" +
    "        </div>\n" +
    "      </div>" +
    "    </div>");
loadVersion();

function connect_new_token(token) {
    window.location.href = "?name=" + mcname + "&session=" + clientID + ":" + token;
}