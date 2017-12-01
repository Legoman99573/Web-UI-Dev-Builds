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

console.log('%cWelcome to OpenAudioMc', 'background: blue; color: white; display: block;font-size:40px');
console.log("%cWARNING FROM DEVELOPERS!", 'background: black; color: RED; display: block;font-size:20px');
console.log("%cIf someone told you to copy/paste something here you have an 420/69 chance you're being scammed.", 'background: black; color: RED; display: block;font-size:20px');
logInit("You may see a message like '[Violation] Forced reflow while executing JavaScript took Xms', Please ignore it since it is caused by lovely socketio.");

if (day >= 32 && day <= 46) {
    // Valentines Time
    LiturkeyColorsInc = ["#601414","#94254c","#d63697","#cf45d0","#f46bfd"]; 110
} else if (day >= 60 && day <= 77) {
    // St. Patrick's Day Time
    LiturkeyColorsInc = ["#9ed840","#d9df1d","#099441","#8dc53e","#07693a"];
} else if (day >= 78 && day <= 99) {
    // Easter Sunday Time
    LiturkeyColorsInc = ["#83ddd6","#8beaaf","#f7f396","#f2c9c9","#aca7c4"];
} else if (day >= 121 && day <= 134) {
    // Mother's Day Time
    LiturkeyColorsInc = ["#ff0071","#ff58b0","#000000","#940000","#ff9494"];
} else if (day >= 151 && day <= 169) {
    // Father's Day Time 17th
    LiturkeyColorsInc = ["#99bb9b","#cbdcea","#cccccc","#ffffff","#2a363b"];
} else if (month === 90) {
    // Halloween Time
    LiturkeyColorsInc = ["#ffb933","#d04c34","#000000","#564536","#8b5e30","#eee978"];
} else if (day >= 328 && day <= 362) {
    // Christmas Day Time
    LiturkeyColorsInc = ["#ffffff","#1A3112","#992114","#C5A436","#222200","#554411","#995511","#ddaa33","#aabb66","#a92f2f","#1f9421","#fbf9d3","#2e5e34","#832525"];
} else {
    // No Holiday :(
    LiturkeyColorsInc = ["#f5d65a","#39e2b0","#3fbe98","#a743c4","#5f5cea","#ea5c5c","#242424","#c5b358","#c0c0c0","#cd7f32","#b9f2ff","#7d1242","#800000"];
}

function loadBg() {
    var item = LiturkeyColorsInc[Math.floor(Math.random()*LiturkeyColorsInc.length)];
    $(body).animate({backgroundColor: item}, {duration:1000});
    // Keep in mind that putting this under 5 seconds (5000 milliseconds) can cause epilepsy and is not recommended.
    if (!localStorage.disableRainbow) {
        setTimeout(loadBg, 5000);
    }
    epilepsyfix = true;
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
        '<h6><b>&#9400;OpenAudioMc 2016-2017</b></h6>',
        dialogWidth: '300px'
    });
    if (!(development !== true)) {
        $('#release-status').text("Unstable");
    } else {
        $('#release-status').text("Stable");
    }
    loadVersion();
}

if (!month === 10 || !month === 11 || !month === 0) {
    $('#snow-settings').hide();
}

function loadSnow() {
    if (month === 10 || month === 11 || month === 0) {
        $('body').snowfall({minSize: 10, maxSize : 20, flakeIndex: 0, image: "files/images/Snowflake.png"});
    }
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
            $.getScript("files/pages/serverError.js?v=1.1");
        }
    } else {
        // Invalid Username
        console.error("[OpenAudioMc][clientException] Exit Code status: 1. Please show in OpenAudioMc Discord https://discord.gg/b44BPv7");
        logInit("clientError 1: No Username filled in. use /audio or /connect to get a new url link");
        $.getScript("files/pages/urlError.js?v=1.1");
    }
}

function enableMain(clientJs) {
    logInit("Login-sucess");
    if (!epilepsyfix === true) {
        if (!localStorage.disableRainbow) {
            console.log("[OpenAudio] Enabled rainbow background colors based on client settings.");
        } else {
            console.log("[OpenAudio] Disabled rainbow background colors based on client settings.");
        }
        loadBg();
        if (!localStorage.disableSnow) {
            console.log("[OpenAudio] Enabled snow based on client settings.");
            loadSnow();
        } else {
            console.log("[OpenAudio] Disabled snow based on client settings.");
        }
    }
    enable(clientJs);
}

function logInit(msg) {
    console.info("[Init] " + msg);
}

if (platform.name === "Microsoft Edge" || platform.name === "IE") {
    logInit("clientError 6: Using an Unsupported Browser");
    $.getScript("files/pages/unsupportedError.js?v=1.1");
} else {
    initialize();
}