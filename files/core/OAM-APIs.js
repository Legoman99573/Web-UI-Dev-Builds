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

var OpenAudioAPI = {};

/**
 * @param {dialogLarge} options
 * @param {dialogWidth} options
 * @param {textTitle} options
 * @param {htmlContent} options
 * @param {optionButtonHide} options
 * @param {optionAction} options
 * @param {hideCloseButton} options
 * @returns {dialogLarge} {dialogWidth} {textTitle} {htmlContent} {optionButtonHide} {optionAction} {hideCloseButton}
 * @description Generates a custom Bootstrap Modal
 */

OpenAudioAPI.generateDialog = function(options) {
    var defaults = {
        dialogLarge: null,
        dialogWidth: null,
        textTitle: null,
        htmlContent: null,
        optionButtonHide: "true",
        optionButtonText: null,
        optionAction: null,
        hideCloseButton: "false"
    };
    var actual = $.extend({}, defaults, options || {});
    if (actual.textTitle === null) {
        console.error("[OpenAudio API] [errorException] textTitle is required");
    } else {
        if (actual.htmlContent === null) {
            console.error("[OpenAudio API] [errorException] htmlContent is required");
        } else {
            if (actual.dialogWidth !== null) {
                $('#dialog-api-width').width(actual.dialogWidth);
            } else {
                try {
                    $('#dialog-api-width').style('');
                } catch (e) {}
            }
            if (actual.dialogLarge !== null) {
                $('#dialog-api-width').addClass('modal-lg');
            } else {
                try {
                    $('#dialog-api-width').removeClass('modal-lg');
                } catch (e) {}
            }
            $('#dialog-api-title').text(actual.textTitle);
            $('#dialog-api-content').html(actual.htmlContent);
            if (actual.optionButtonHide === 'false') {
                if (actual.optionButtonText === null) {
                    $('#dialog-api-action').hide();
                    console.error("[OpenAudio API] [errorException] optionButtonText is required when optionButtonHide is set to false");
                } else {
                    if (actual.optionAction === null) {
                        $('#dialog-api-action').hide();
                        console.error("[OpenAudio API] [errorException] optionAction is required when optionButtonHide is set to false");
                    } else {
                        $('#dialog-api-action').show().text(actual.optionButtonText).click(actual.optionAction);
                    }
                }
                if (actual.hideCloseButton === 'true') {
                    $('.mdl-dialog__actions').hide();
                }
            } else {
                $('#dialog-api-action').hide();
            }
            $('#dialog-api').modal('show');
        }
    }
};

/**
 * @param {icon} icon
 * @param {callback} callback
 * @param {whattocallback} whattocallback
 * @param {iconname} iconname
 * @returns {icon} {callback} {whattocallback} {iconname}
 * @description Displays options in the left tray item
 */
function trayItem(icon, callback, whattocallback, iconname) {
    $('#icons').append('<div class="mdl-navigation__link ' + icon + '" onclick="' + callback + '(\'' + whattocallback + '\'); $(\'div\').removeClass(\'is-visible\');"> ' + iconname + '</div>');
}

/**
 * @param {onClick} options
 * @param {itemName} options
 * @param {underlineBelow} options
 * @returns {onClick} {itemName} {underlineBelow}
 * @description Displays an option in the Right Tray Icon
 */
OpenAudioAPI.rightTrayItem = function(options) {
    var defaults = {
        onClick: null,
        itemName: null,
        underlineBelow: "false"
    };
    var actual = $.extend({}, defaults, options || {});
    if (actual.onClick === null) {
        console.error('[OpenAudioAPI] [errorException] onClick cannot be empty.');
    } else {
        if (actual.itemName === null) {
            console.error('[OpenAudioAPI] [errorException] itemName cannot be empty.');
        } else {
            if (actual.underlineBelow === "true") {
                $('#side-menu').append('<li class="mdl-menu__item mdl-menu__item--full-bleed-divider right-menu" onclick="' + actual.onClick + '; $(\'div\').removeClass(\'is-visible\');">' + actual.itemName + '</li>');
            } else {
                $('#side-menu').append('<li class="mdl-menu__item right-menu" onclick="' + actual.onClick + '; $(\'div\').removeClass(\'is-visible\');">' + actual.itemName + '</li>');
            }
        }
    }
};


/**
 * @param {songTitle} options
 * @param {songImage} options
 * @param {songURL} options
 * @returns {songTitle} {songImage} {songURL}
 * @description Displays Song Notification in Material Snackbar
 */
OpenAudioAPI.songNotification = function(options) {
    var defaults = {
        songTitle: null,
        songImage: null,
        songURL: null
    };
    var actual = $.extend({}, defaults, options || {});
    if (actual.songTitle === null) {
        console.error('[OpenAudioAPI] [errorException] songTitle cannot be empty.');
    } else {
        if (actual.songURL === null) {
            console.error('[OpenAudioAPI] [errorException] songURL cannot be empty.');
        } else {
            $('#song-dialog').click(function () {
                openInNewTab(actual.songURL);
            });
            var notification = document.querySelector('#song-dialog');
            if (actual.songImage === null) {
                $('#song-image').attr('src', 'files/images/sc-default.png');
            } else {
                $('#song-image').attr('src', actual.songImage);
            }
            var data = {
                message: 'Now Playing: ' + actual.songTitle,
                timeout: 10000
            };
            notification.MaterialSnackbar.showSnackbar(data);
        }
    }
};

/**
 * @param {url} options
 * @returns {url}
 * @description Loads as a JS Mod
 */
OpenAudioAPI.getCSS = function(options) {
    var defaults = {
        url: null
    };
    var actual = $.extend({}, defaults, options || {});
    if (actual.url !== null) {
        console.info("[ModManager] Attempting to add css file from " + actual.url + ".");
        var extension = actual.url.substr((actual.url.lastIndexOf('.') + 1));
        if (!/(css)$/ig.test(extension)) {
            console.error("[OpenAudioAPI] [errorException] File is not a Cascade Style Sheet (.css) file. Not appending to the client.");
            OpenAudioAPI.loadMod(url, "Disabled", "CSSMod");
        } else {
            $('head').append('<link rel="stylesheet" href="' + actual.url + '" type="text/css" />');
            console.info("[ModManager] Added css file from location " + actual.url + " successfully");
            OpenAudioAPI.loadMod(url, "Enabled", "CSSMod");
        }
    } else {
        console.error("[OpenAudioAPI] [errorException] url cannot be null.");
    }
};

/**
 * @param {url} options
 * @returns {url}
 * @description Loads as a JavaS Mod
 */
OpenAudioAPI.getJS = function(options) {
    var defaults = {
        url: null
    };
    var actual = $.extend({}, defaults, options || {});
    if (actual.url !== null) {
        console.info("[ModManager] Attempting to add css file from " + actual.url + ".");
        var extension = actual.url.substr((actual.url.lastIndexOf('.') + 1));
        if (!/(js)$/ig.test(extension)) {
            console.error("[OpenAudioAPI] [errorException] File is not a JavaScript (.js) file. Not appending to the client.");
            OpenAudioAPI.loadMod(actual.url, "Disabled", "JSMod");
        } else {
            $.getScript(actual.url, function() {
                console.info("[ModManager] Added JavaScript file from location " + actual.url + " successfully");
                OpenAudioAPI.loadMod(actual.url, "Enabled", "JSMod");
            });
        }
    } else {
        console.error("[OpenAudioAPI] [errorException] url cannot be null.");
    }
};

/**
 * @description Displays Mods enabled/disabled in Mods Menu
 */
OpenAudioAPI.loadMod = function(url, status, type) {
    if (url !== "undefined") {
        if (type === "JSMod") {
            $('#js-none').hide();
            if (status === "Enabled") {
                $('#js-mods').append('<div class="mods" style="color: green">' + url + ' Loaded Successfully</div>');
            }
            else if (status === "Disabled") {
                $('#js-mods').append('<div class="mods" style="color: red">' + url + ' Failed to load. Reason: Not a JavaScript Extension</div>');
            } else {
                console.warn("[OpenAudioAPI] [illegalException] Status cannot be " + status + ".");
            }
        }
        else if (type === "CSSMod") {
            $('#css-none').hide();
            if (status === "Enabled") {
                $('#css-mods').append('<div class="mods" style="color: green">' + url + ' Loaded Successfully</div>');
            }
            else if (status === "Disabled") {
                $('#css-mods').append('<div class="mods" style="color: red">' + url + ' Failed to load. Reason: Not a CSS Extension</div>');
            } else {
                console.warn("[OpenAudioAPI] [illegalException] Status cannot be " + status + ".");
            }
        } else {
            console.warn("[OpenAudioAPI] [illegalException] Type cannot be " + type + ".");
        }
    } else {
        console.error("[OpenAudioAPI] [errorException] URL must be defined.");
    }
};

/**
 * @param {modName} options
 * @param {currentVersion} options
 * @param {latestVersion} options
 * @param {urlLink} options
 * @returns {modName} {currentVersion} {latestVersion} {urlLink}
 * @description Checks to see if someone is using an outdated JS Mod
 */
OpenAudioAPI.versionCheckup = function(options) {
    var defaults = {
        modName: null,
        currentVersion: null,
        latestVersion: null,
        urlLink: null
    };
    var actual = $.extend({}, defaults, options || {});
    if (actual.modName !== null) {
        if (actual.currentVersion !== null) {
            if (actual.latestVersion !== null) {
                if (actual.urlLink !== null) {
                    if (actual.currentVersion === actual.latestVersion) {
                        var notification = document.querySelector('.mdl-js-snackbar');
                        var data = {
                            message: actual.modName + ' is up to date.',
                            timeout: 10000
                        };
                        notification.MaterialSnackbar.showSnackbar(data);
                    } else {
                        var notification = document.querySelector('.mdl-js-snackbar');
                        var data = {
                            message: 'Update available for ' + actual.modName,
                            actionHandler: function() {
                                openInNewTab(actual.urlLink)
                            },
                            actionText: 'Click Here',
                            timeout: 10000
                        };
                        notification.MaterialSnackbar.showSnackbar(data);
                    }
                } else {
                    console.error("[OpenAudioAPI] [errorException] urlLink cannot be null.");
                }
            } else {
                console.error("[OpenAudioAPI] [errorException] latestVersion cannot be null.");
            }
        } else {
            console.error("[OpenAudioAPI] [errorException] currentVersion cannot be null.");
        }
    }
};

/**
 * @param {onClick} options
 * @param {itemName} options
 * @param {underlineBelow} options
 * @returns {onClick} {itemName} {underlineBelow}
 * @description Adds an option in Settings Menu
 */
OpenAudioAPI.settingsItem = function(options) {
    var defaults = {
        onClick: null,
        itemName: null,
        underlineBelow: "false"
    };
    var actual = $.extend({}, defaults, options || {});
    if (actual.onClick === null) {
        console.error('[OpenAudioAPI] [errorException] onClick cannot be empty.');
    } else {
        if (actual.itemName === null) {
            console.error('[OpenAudioAPI] [errorException] itemName cannot be empty.');
        } else {
            if (actual.underlineBelow === "true") {
                $('#settings-api').append('<li class="mdl-menu__item mdl-menu__item--full-bleed-divider settings-menu" onclick="' + actual.onClick + '; $(\'div\').removeClass(\'is-visible\');">' + actual.itemName + '</li>');
            } else {
                $('#settings-api').append('<li class="mdl-menu__item right-menu settings-menu" onclick="' + actual.onClick + '; $(\'div\').removeClass(\'is-visible\');">' + actual.itemName + '</li>');
            }
        }
    }
}