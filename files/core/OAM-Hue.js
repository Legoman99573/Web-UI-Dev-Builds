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

function ConnectToHueBridge() {
    if (!localStorage.MyHueBridgeIP) { // No Cached BridgeIP?
        MyHue.PortalDiscoverLocalBridges().then(function BridgesDiscovered() {
            MyHue.BridgeGetConfig().then(function BridgeConfigReceived() {
                MyHue.BridgeGetData().then(function BridgeDataReceived() {
                    localStorage.MyHueBridgeIP = MyHue.BridgeIP; // Cache BridgeIP
                    on_hue_link();
                }, function UnableToRetreiveBridgeData() {
                    MyHue.BridgeCreateUser().then(function BridegeUserCreated() {
                        localStorage.MyHueBridgeIP = MyHue.BridgeIP; // Cache BridgeIP
                        on_hue_link(MyHue.BridgeName);
                        MyHue.LightsGetData().then(function LightsDataFound() {
                            hue_get_lights();
                        }, function UnableToGetLightData() {
                            swal({
                                html: langpack.hue.light_data_fail,
                                type: 'error'
                            });
                        });
                    }, function UnableToCreateUseronBridge() {
                        swal({
                            title: langpack.hue.please_link,
                            type: 'question',
                            allowOutsideClick: false,
                            showConfirmButton: false
                        });
                        return;
                    });
                });
            }, function UnableToRetreiveBridgeConfig() {
                no_hue_link();
                return;
            });
        }, function UnableToDiscoverLocalBridgesViaPortal() {
            no_hue_link();
            return;
        });
    } else {
        MyHue.BridgeIP = localStorage.MyHueBridgeIP;
        MyHue.BridgeGetConfig().then(function CachedBridgeConfigReceived() {
            MyHue.BridgeGetData().then(function CachedBridgeDataReceived() {
                on_hue_link(MyHue.BridgeName);
                    MyHue.LightsGetData().then(function CachedLightsDataFound() {
                        hue_get_lights();
                    });
            }, function UnableToRetreiveCachedBridgeData() {
                no_hue_link();
                return;
            });
        }, function UnableToRetreiveCachedBridgeConfig() {
            no_hue_link();
            return;
        });
    }
}

function ConnectToHueDirectIP() {
    MyHue.PortalDiscoverLocalBridges().then(function BridgesDiscovered() {
        MyHue.BridgeGetConfig().then(function BridgeConfigReceived() {
            MyHue.BridgeGetData().then(function BridgeDataReceived() {
                on_hue_link();
            }, function UnableToRetreiveBridgeData() {
                MyHue.BridgeCreateUser().then(function BridegeUserCreated() {
                    on_hue_link(MyHue.BridgeName);
                }, function UnableToCreateUseronBridge() {
                    swal({
                        title: langpack.hue.please_link,
                        type: 'question',
                        allowOutsideClick: false,
                        showConfirmButton: false
                    });
                    return;
                });
            });
        }, function UnableToRetreiveBridgeConfig() {
            invalid_hue_link();
            return;
        });
    }, function UnableToDiscoverLocalBridgesViaPortal() {
        no_hue_link();
        return;
    });
}



function no_hue_link() {
    if (!(direct) !== true) {
        swal({
            html: langpack.hue.re_search_bridge,
            type: 'info',
            allowOutsideClick: false,
            showConfirmButton: false
        });
    }
    hue_start_animation = true;
}

function invalid_hue_link() {
    window.clearInterval(hue_connect_loop);
    delete localStorage.MyHueBridgeIP;
    StopHueLoop = true;
    direct = false;
    connecting = true;
    swal({
        title: langpack.hue.cant_connect,
        html: '<div type="button" class="btn btn-primary" onclick="hue_menu();">Retry Auto Detect</div> ' +
        '<div type="button" class="btn btn-primary" onclick="direct_hue_connection();">Direct Connect</div>',
        type: 'error',
        showConfirmButton: false
    });
}

function loop_hue_connection() {
    if (window.location.protocol == "http:") {
        HueTestTry = 0;
        hue_connect_loop = window.setInterval(function() {
            HueTestTry++;
            console.info("[Philips-Hue] Hue connect attempt: " + HueTestTry);
            if (+HueTestTry < +5) {
                if (!(direct) !== true) {
                    ConnectToHueBridge();
                } else {
                    ConnectToHueDirectIP();
                }
            } else {
                window.clearInterval(hue_connect_loop);
                StopHueLoop = true;
                direct = false;
                connecting = true;
                delete localStorage.MyHueBridgeIP;
                console.info("[Philips-Hue] Failed to detect hue bridge :(");
                swal({
                    title: langpack.hue.not_found,
                    html: '<div type="button" class="btn btn-primary" onclick="hue_menu();">Retry Auto Detect</div> ' +
                    '<div type="button" class="btn btn-primary" onclick="direct_hue_connection();">Direct Connect</div>',
                    type: 'error',
                    showConfirmButton: false
                });
            }
        }, 5000);
    }
    else if (window.location.protocol == "https:") {
        console.info("[Philips-Hue] There is no support over a secure connection :(");
        swal({
            html: langpack.hue.ssl_error,
            type: 'error'
        });
    }
}

function direct_hue_connection() {
    swal({
        html: langpack.hue.direct_ip_prompt,
        input: 'text',
        showCancelButton: true,
        confirmButtonText: 'Connect',
        showLoaderOnConfirm: true,
        inputValidator: function (value) {
            return new Promise(function (resolve, reject) {
                if (value) {
                    resolve();
                } else {
                    reject(langpack.hue.direct_ip_prompt_empty);
                }
            })
        },
        allowOutsideClick: false
    }).then(function (result) {
        localStorage.MyHueBridgeIP = result;
        direct = false;
        swal({
            type: 'info',
            html: langpack.hue.direct_ip_lookup.replace("%ip%", result),
            showConfirmButton: false,
            allowOutsideClick: false
        });
        $.ajax({
            url: 'http://' + result + '/api/',
            success: function() {
                swal({
                    type: 'info',
                    text: langpack.hue.direct_ip_lookup_success.replace("%ip%", result),
                    showConfirmButton: false,
                    allowOutsideClick: false
                });
                loop_hue_connection();
                return true;
            },
            error:function() {
                swal({
                    title: langpack.hue.direct_ip_lookup_failed.replace("%ip%", result),
                    html: '<div type="button" class="btn btn-primary" onclick="hue_menu();">Retry Auto Detect</div> ' +
                    '<div type="button" class="btn btn-primary" onclick="direct_hue_connection();">Direct Connect</div>',
                    type: 'error',
                    showConfirmButton: false
                });
                return false;
            }
        });
    });
}

function on_hue_link(name) {
    if (hue_start_animation) {
        window.clearInterval(hue_connect_loop);
        console.info("[Philips-Hue] Hue connected!");
        openaudio.whisper("hueConnected");
        hue_start_animation = false;
        setTimeout(function() {
            setTimeout(function() {
                hue_connected = true;
                hue_set = true;
                swal({
                    title: langpack.hue.connected_with_bridge.replace("%bridgename%", name),
                    type: 'success'
                });
            }, 1000);
        }, 1000);
    }
}

function reset_hue() {
    hue_off();
    setTimeout(function() {
        hue_on();
        hue_connected = true;
        hue_set_color(HueDefaultColor);
    }, 500);
}



function hue_on() {
    for (var key in MyHue.Lights) {
        if (MyHue.Lights.hasOwnProperty(key)) {
            if (hue_lights[key].enabled) {
                MyHue.LightOn(key);
            }
        }
    }
}



function hue_off() {
    for (var key in MyHue.Lights) {
        if (MyHue.Lights.hasOwnProperty(key)) {
            if (hue_lights[key].enabled) {
                MyHue.LightOff(key);
            }
        }
    }
}

function hue_set_brightes(number) {
    for (var key in MyHue.Lights) {
        if (MyHue.Lights.hasOwnProperty(key)) {
            if (hue_lights[key].enabled) {
                MyHue.LightSetBrightness(key, number);
            }
        }
    }
}

function hue_get_lights() {
    for (var key in MyHue.Lights) {
        hue_lights[key] = {};
        hue_lights[key].name = MyHue.Lights[key].name;
        hue_lights[key].state = MyHue.Lights[key].state;
        hue_lights[key].color2 = HueDefaultColor;
        hue_lights[key].enabled = true;
        $('.hue').each(function () {
            $('.HueLightList', this).append('<div class="alert alert-success" onclick="hue_list_click_handeler(this);" id="ListLightHue_' + key + '"><strong id="ListLightHue_' + key + '_state">Enabled</strong> ' + hue_lights[key].name + '</div>');
        });
    }
}

function hue_list_click_handeler(object) {
    if (object.className === "alert alert-success") {
        //disable light

        var lightID = object.id.match(/\d+/)[0];
        hue_lights[lightID].enabled = false;
        object.className = "alert alert-danger";
        document.getElementById(object.id + "_state").innerHTML = "Disabled";
        hue_reset_state(lightID);

    } else {
        //enable light

        var lightID = object.id.match(/\d+/)[0];
        hue_lights[lightID].enabled = true;
        object.className = "alert alert-success";
        document.getElementById(object.id + "_state").innerHTML = "Enabled";
        hue_set_color(hue_lights[lightID].color2, lightID);
    }
}

function hue_reset_state() {
    for (var key in MyHue.Lights) {
        if (MyHue.Lights.hasOwnProperty(key)) {
            var state = hue_lights[key].state;
            MyHue.LightSetBrightness(key, state.bri);
            MyHue.LightSetXY(key);
            MyHue.LightAlertNone(key);
            MyHue.LightEffectNone(key);
        }
    }
}



function hue_set_color(args, id) {
    if (hue_connected) {
        try {
            if (id > 3 || id == null || hue_lights[id].enabled === false) {
                //for all lights
                var colorString = args,
                    colorsOnly = colorString.substring(colorString.indexOf('(') + 1, colorString.lastIndexOf(')')).split(/,\s*/);
                red = parseInt(colorsOnly[0]);
                green = parseInt(colorsOnly[1]);
                blue = parseInt(colorsOnly[2]);
                opacity = parseInt(colorsOnly[3]);
                for (var key in MyHue.Lights) {
                    if (MyHue.Lights.hasOwnProperty(key)) {
                        if (hue_lights[key].enabled) {
                            MyHue.LightSetRGB(key, red, green, blue);
                            hue_lights[key].color2 = args;
                        }
                    }
                }
                if (opacity === 0) {
                    for (var key in MyHue.Lights) {
                        if (MyHue.Lights.hasOwnProperty(key)) {
                            if (hue_lights[key].enabled) {
                                MyHue.LightOff(key);
                            }
                        }
                    }
                } else {
                    for (var key in MyHue.Lights) {
                        if (MyHue.Lights.hasOwnProperty(key)) {
                            if (hue_lights[key].enabled) {
                                MyHue.LightOn(key);
                                MyHue.LightSetBrightness(key, opacity);
                            }
                        }
                    }
                }
            } else {
                var colorString = args,
                    colorsOnly = colorString.substring(colorString.indexOf('(') + 1, colorString.lastIndexOf(')')).split(/,\s*/);
                red = parseInt(colorsOnly[0]);
                green = parseInt(colorsOnly[1]);
                blue = parseInt(colorsOnly[2]);
                opacity = parseInt(colorsOnly[3]);
                MyHue.LightSetRGB(id, red, green, blue);
                hue_lights[id].color2 = args;
                if (opacity === 0) {
                    MyHue.LightOff(id);
                } else {
                    MyHue.LightOn(id);
                    MyHue.LightSetBrightness(id, opacity);
                }
            }
        } catch (e) {
            console.info("[Philips-Hue] Unable to decode hue color code rgba(" + args + ")... well shit.");
        }
    }
}

function hue_menu() {
    if (!(hue_set) !== true) {
        $("#hue").modal()
    } else {
        if (!(connecting) !== true) {
            connecting = false;
            swal({
                title: langpack.hue.connecting,
                type: 'info',
                showConfirmButton: false,
                allowOutsideClick: false
            });
        }
        loop_hue_connection();
    }
}