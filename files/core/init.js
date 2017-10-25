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

console.log('%cWelcome to OpenAudioMc', 'background: blue; color: white; display: block;font-size:40px');
console.log("%cWARNING FROM DEVELOPERS!", 'background: black; color: RED; display: block;font-size:20px');
console.log("%cIf someone told you to copy/paste something here you have an 420/69 chance you're being scammed.", 'background: black; color: RED; display: block;font-size:20px');
logInit("You may see a message like '[Violation] Forced reflow while executing JavaScript took Xms', Please ignore it since it is caused by lovely socketio.");

function loadBg() {
    var LiturkeyColorsInc = ["#f5d65a","#39e2b0","#3fbe98","#a743c4","#5f5cea","#ea5c5c","#242424","#c5b358","#c0c0c0","#cd7f32","#b9f2ff","#7d1242","#800000"];
    var item = LiturkeyColorsInc[Math.floor(Math.random()*LiturkeyColorsInc.length)];
    $(body).animate({backgroundColor: item}, {duration:1000});
    // Keep in mind that putting this under 5 seconds (5000 milliseconds) can cause epilepsy and is not recommended.
    setTimeout(loadBg, 5000);
}

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

ui = {};
var issmall = getUrlVar("small") == null;
var debug = getUrlVar("debug") == null;


ui.color = function(code) {
    $("#footer").animate({"backgroundColor":code},{duration:1000});
    $("#header").animate({"backgroundColor":code},{duration:500});
    $("#box").animate({"backgroundColor":code},{duration:300});
};

tinyWindow = getUrlVar("tinyWindow");


console.info("You like to look under the hood? Why not help us ? :-) https://github.com/OpenAudioMc/Web-UI-Dev-Builds/");

// Make sure that OpenAudioMc is mentioned in the function somewhere or your server will be banned until it's fixed as it was stated in the license. To appeal, email us at contact@openaudiomc.net. Thanks, ~OpenAudioMc developers
function about() {
    OpenAudioAPI.generateDialog({
        textTitle: 'About',
        htmlContent: '<h6>OpenAudioMc Version: <b id="version">Unable to fetch Version</b></h6>\n' +
        '<h6>Dev Build #:<b id="build">Unable to fetch Build</b></h6>\n' +
        '<h6>Release Status: <b id="release-status">Unable to fetch Release Status</b></h6>\n' +
        '<h6><b>&#9400;OpenAudioMc 2016-2017</b></h6>'
    });
    if (!(development != true)) {
        $('#release-status').text("Unstable");
    } else {
        $('#release-status').text("Stable");
    }
    loadVersion();
}

function getUrlVar(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    //use invalid char so it triggers error
    return "(none)";
}

function initialize() {
    var username = getUrlVar("name");
    if (/^\w+$/i.test(username)) {
        //save to load, i guess?
        logInit("Trying login.");
        try {
            var api = apijson;
            session = getUrlVar("session");
            socket_io = api.socket;
            mcname = getUrlVar("name");
            socketio_client_js = api.clientJS;
            enableMain(api.clientJS);
        } catch (e) {
            console.error("[OpenAudioMc][clientException] Exit Code status: 2. Please show in OpenAudioMc Discord https://discord.gg/b44BPv7");
            logInit("clientError 2: Cannot connect to OpenAudio Socket Server.");
            $.getScript("files/pages/serverError.js");
        }
    } else {
        // Invalid Username
        console.error("[OpenAudioMc][clientException] Exit Code status: 1. Please show in OpenAudioMc Discord https://discord.gg/b44BPv7");
        logInit("clientError 1: No Username filled in. use /audio or /connect to get a new url link");
        $.getScript("files/pages/urlError.js");
    }
}

function enableMain(clientJs) {
    logInit("Login-sucess");
    enable(clientJs);
    loadBg();
}

function logInit(msg) {
    console.info("[Init] " + msg);
}

if (platform.name === "Microsoft Edge" || platform.name === "IE") {
    logInit("clientError 6: Using an Unsupported Browser");
    $.getScript("files/pages/unsupportedError.js");
} else {
    initialize();
}