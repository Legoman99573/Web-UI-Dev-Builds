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

// Dialog API
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
    if (actual.textTitle == null) {
        console.error("[OpenAudio API] [errorException] textTitle is required");
    } else {
        if (actual.htmlContent == null) {
            console.error("[OpenAudio API] [errorException] htmlContent is required");
        } else {
            if (actual.dialogWidth != null) {
                $('#dialog-api-width').width(actual.dialogWidth);
            } else {
                try {
                    $('#dialog-api-width').style('');
                } catch (e) {}
            }
            if (actual.dialogLarge != null) {
                $('#dialog-api-width').addClass('modal-lg');
            } else {
                try {
                    $('#dialog-api-width').removeClass('modal-lg');
                } catch (e) {}
            }
            $('#dialog-api-title').text(actual.textTitle);
            $('#dialog-api-content').html(actual.htmlContent);
            if (actual.optionButtonHide == 'false') {
                if (actual.optionButtonText == null) {
                    $('#dialog-api-action').hide();
                    console.error("[OpenAudio API] [errorException] optionButtonText is required when optionButtonHide is set to false");
                } else {
                    if (actual.optionAction == null) {
                        $('#dialog-api-action').hide();
                        console.error("[OpenAudio API] [errorException] optionAction is required when optionButtonHide is set to false");
                    } else {
                        $('#dialog-api-action').show().text(actual.optionButtonText).click(actual.optionAction);
                    }
                }
                if (actual.hideCloseButton == 'true') {
                    $('.mdl-dialog__actions').hide();
                }
            } else {
                $('#dialog-api-action').hide();
            }
            $('#dialog-api').modal('show');
        }
    }
};

// Left Menu API
function trayItem(icon, callback, iconname) {
    $('#icons').append('<div class="mdl-navigation__link ' + icon + '" onclick="' + callback + '(); $(\'div\').removeClass(\'is-visible\');"> ' + iconname + '</div>');
}

// Right Tray Item API
OpenAudioAPI.rightTrayItem = function(options) {
    var defaults = {
        onClick: null,
        itemName: null
    };
    var actual = $.extend({}, defaults, options || {});
    if (actual.onClick == null) {
        console.error('[OpenAudioAPI] [errorException] onClick cannot be empty.');
    } else {
        if (actual.itemName == null) {
            console.error('[OpenAudioAPI] [errorException] itemName cannot be empty.');
        } else {
            $('#side-menu').append('<li class="mdl-menu__item" onclick="' + actual.onClick + '; $(\'div\').removeClass(\'is-visible\');">' + actual.itemName + '</li>');
        }
    }
};

// Song Notification API.
OpenAudioAPI.songNotification = function(options) {
    var defaults = {
        songTitle: null,
        songImage: null,
        songURL: null
    };
    var actual = $.extend({}, defaults, options || {});
    if (actual.songTitle == null) {
        console.error('[OpenAudioAPI] [errorException] songTitle cannot be empty.');
    } else {
        if (actual.songURL == null) {
            console.error('[OpenAudioAPI] [errorException] songURL cannot be empty.');
        } else {
            $('#song-dialog').click(function () {
                openInNewTab(actual.songURL);
            });
            var notification = document.querySelector('#song-dialog');
            if (actual.songImage == null) {
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

// CSS loader API
OpenAudioAPI.getCSS = function(options) {
    var defaults = {
        url: null
    };
    var actual = $.extend({}, defaults, options || {});
    if (actual.url != null) {
        var extension = actual.url.substr((actual.url.lastIndexOf('.') + 1));
        if (!/(css)$/ig.test(extension)) {
            console.error("[OpenAudioAPI] [errorException] File is not a Cascade Style Sheet (.css) file. Not appending to the client.");
        } else {
            $('head').append('<link rel="stylesheet" href="' + actual.url + '" type="text/css" />');
        }
    } else {
        console.error("[OpenAudioAPI] [errorException] url cannot be null.");
    }
}

// ModLoader API
OpenAudioAPI.loadMod = function(url, status, type) {
    if (url != "undefined") {
        if (type == "JSMod") {
            if (status == "Enabled") {
                $('#Mods').append('<tr>' +
                    '<td class="mdl-data-table__cell--non-numeric" style="overflow: hidden;">JavaScript</td>' +
                    '<td class="dialog-source-fix">' + url + '</td>' +
                    '<td>Enabled</td>' +
                    '</tr>'
                );
            }
            else if (status == "Disabled") {
                $('#Mods').append('<tr>' +
                    '<td class="mdl-data-table__cell--non-numeric" style="overflow: hidden;">JavaScript</td>' +
                    '<td class="dialog-source-fix">' + url + '</td>' +
                    '<td>Disabled by Error</td>' +
                    '</tr>'
                );
            } else {
                console.warn("[OpenAudioAPI] [illegalException] Status cannot be " + status + ".");
            }
        }
        else if (type == "CSSMod") {
            if (status == "Enabled") {
                $('#Mods').append('<tr>' +
                    '<td class="mdl-data-table__cell--non-numeric" style="overflow: hidden;">CSS</td>' +
                    '<td class="dialog-source-fix">' + url + '</td>' +
                    '<td>Enabled</td>' +
                    '</tr>'
                );
            }
            else if (status == "Disabled") {
                $('#Mods').append('<tr>' +
                    '<td class="mdl-data-table__cell--non-numeric" style="overflow: hidden;">CSS</td>' +
                    '<td class="dialog-source-fix">' + url + '</td>' +
                    '<td>Disabled by Error</td>' +
                    '</tr>'
                );
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

/*
 Version Checking API
 Good for people who can install mods on their own servers.
 This can be called using JQuery AJAX $.getScript("URL")
*/
OpenAudioAPI.versionCheckup = function(options) {
    var defaults = {
        modName: null,
        currentVersion: null,
        latestVersion: null,
        urlLink: null
    };
    var actual = $.extend({}, defaults, options || {});
    if (actual.modName != null) {
        if (actual.currentVersion != null) {
            if (actual.latestVersion != null) {
                if (actual.urlLink != null) {
                    if (actual.currentVersion == actual.latestVersion) {
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