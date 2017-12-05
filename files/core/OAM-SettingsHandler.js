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

async function editBgImage() {
    const {value: BgImage} = await swal({
        title: 'Update Background Image',
        text: langpack.settings.bgimage,
        input: 'text',
        showCancelButton: true,
        confirmButtonText: 'Update',
        inputValidator: (result) => {
            return !result && langpack.settings.bgimage_rejected;
        },
        allowOutsideClick: false,
    });
    if (BgImage) {
        if (BgImage === 'default' || BgImage === 'Default') {
            delete localStorage.ThemeURL;
            if (localStorage.defaultTheme) {
                document.body.background = localStorage.defaultTheme;
                // Added since CSS ignores what we set in main.css. This will stay its size even on minimize and maximize :D
                document.body.style = "background-attachment: fixed; background-size: cover; background-repeat: no-repeat";
            } else {
                document.body.background = '';
            }
            swal({
                type: 'success',
                title: langpack.settings.bgimage_default,
                showCancelButton: false
            });
        } else {
            localStorage.ThemeURL = BgImage;
            document.body.background = BgImage;
            // Added since CSS ignores what we set in main.css. This will stay its size even on minimize and maximize :D
            document.body.style = "background-attachment: fixed; background-size: cover; background-repeat: no-repeat";
            swal({
                type: 'success',
                title: langpack.settings.bgimage_success,
                showCancelButton: false
            });
        }
    }
}

function editLanguage() {
    swal({
        title: 'Update Language',
        text: langpack.settings.language,
        input: 'select',
        inputOptions: {
            'Default': 'Use Default',
            'English': 'English',
            'Dutch': 'Dutch',
            'French': 'French',
            'German': 'German',
            'Hawaiian': 'Hawaiian',
            'Japanese': 'Japanese',
            'PirateSpeak': 'PirateSpeak',
            'Portugues': 'Portugues',
            'Spanish': 'Spanish'
        },
        inputPlaceholder: 'Select language',
        showCancelButton: true,
        showLoaderOnConfirm: true,
        preConfirm: (Language) => {
            if (Language === 'Default') {
                $.getScript("https://rawgit.com/OpenAudioMc/Dev-Build-Language-Packs/master/" + localStorage.DefaultLanguage + ".js").done(
                    function () {
                        delete localStorage.SetLanguage;
                        if (!closedwreason) {
                            $('.name').html(langpack.message.welcome.replace("%name%", mcname));
                        } else {
                            $('.name').html(langpack.message.notconnected);
                        }
                        if (socketclosed) {
                            $('.name').html(langpack.message.socket_closed);
                        }
                        swal({
                            type: 'success',
                            title: langpack.settings.language_default.replace('%lang%', localStorage.DefaultLanguage),
                            showCancelButton: false
                        });
                    }).fail(function () {
                    delete localStorage.SetLanguage;
                    swal({
                        type: 'error',
                        title: "An error has occured switching to default language " + localStorage.DefaultLanguage,
                        showCancelButton: false
                    });
                })

            } else {
                $.getScript("https://rawgit.com/OpenAudioMc/Dev-Build-Language-Packs/master/" + Language + ".js").done(
                    function () {
                        localStorage.SetLanguage = Language;
                        if (!closedwreason) {
                            $('.name').html(langpack.message.welcome.replace("%name%", mcname));
                        } else {
                            $('.name').html(langpack.message.notconnected);
                        }
                        if (socketclosed) {
                            $('.name').html(langpack.message.socket_closed);
                        }
                        swal({
                            type: 'success',
                            title: langpack.settings.language_success.replace('%lang%', Language),
                            showCancelButton: false
                        });
                    }).fail(function () {
                        delete localStorage.SetLanguage;
                        swal({
                            type: 'error',
                            title: "An error has occured switching to language " + Language,
                            showCancelButton: false
                        });
                    })
            }
        },
        confirmButtonText: 'Update',
        inputValidator: (result) => {
            return !result && langpack.settings.language_rejected;
        },
        allowOutsideClick: false
    });
}

async function editColorTemplate() {
    const {value: PrimaryColor} = await swal({
        title: 'Update Primary Color',
        input: 'select',
        inputOptions: {
            'Default': 'Reset All',
            'brown': 'Brown',
            'grey': 'Grey',
            'blue_grey': 'Blue Grey',
            'orange': 'Orange',
            'deep_orange': 'Deep Orange',
            'red': 'Red',
            'pink': 'Pink',
            'purple': 'Purple',
            'deep_purple': 'Deep Purple',
            'indigo': 'Indigo',
            'blue': 'Blue',
            'light_blue': 'Light Blue',
            'cyan': 'Cyan',
            'teal': 'Teal',
            'green': 'Green',
            'light_green': 'Light Green',
            'lime': 'Lime',
            'yellow': 'Yellow',
            'amber': 'Amber'
        },
        inputPlaceholder: 'Select Primary Color',
        showCancelButton: true,
        confirmButtonText: 'Update',
        inputValidator: (result) => {
            return !result && langpack.settings.primarycolor_rejected;
        },
        allowOutsideClick: false
    });

    // Runs after SweetAlert is done
    if (PrimaryColor) {
        if (PrimaryColor === 'Default') {
            if (localStorage.PrimaryColor) {
                delete localStorage.PrimaryColor;
            }
            if (localStorage.SecondaryColor) {
                delete localStorage.SecondaryColor;
            }
            $('link[title="main"]').attr('href', 'files/css/style.css');
            swal({
                type: 'success',
                title: langpack.settings.color_default,
            });
        } else {
            const {value: SecondaryColor} = await swal({
                title: 'Update Secondary Color',
                input: 'select',
                inputOptions: {
                    'Default': 'Reset All',
                    'orange': 'Orange',
                    'deep_orange': 'Deep Orange',
                    'red': 'Red',
                    'pink': 'Pink',
                    'purple': 'Purple',
                    'deep_purple': 'Deep Purple',
                    'indigo': 'Indigo',
                    'blue': 'Blue',
                    'light_blue': 'Light Blue',
                    'cyan': 'Cyan',
                    'teal': 'Teal',
                    'green': 'Green',
                    'light_green': 'Light Green',
                    'lime': 'Lime',
                    'yellow': 'Yellow',
                    'amber': 'Amber'
                },
                inputPlaceholder: 'Select Secondary Color',
                confirmButtonText: 'Update',
                inputValidator: (result) => {
                    return !result && langpack.settings.secondarycolor_rejected;
                },
                allowOutsideClick: false,
            });
            if (SecondaryColor) {
                if (PrimaryColor === SecondaryColor) {
                    if (!localStorage.SecondaryColor) {
                        delete localStorage.PrimaryColor;
                    }
                    swal({
                        type: 'error',
                        text: langpack.settings.secondarycolor_rejected_match_primary,
                        showCancelButton: false
                    })
                } else if (SecondaryColor === 'Default') {
                    if (localStorage.PrimaryColor) {
                        delete localStorage.PrimaryColor;
                    }
                    if (localStorage.SecondaryColor) {
                        delete localStorage.SecondaryColor;
                    }
                    $('link[title="main"]').attr('href', 'files/css/style.css');
                    swal({
                        type: 'success',
                        title: langpack.settings.color_default,
                        showCancelButton: false
                    });
                } else {
                    localStorage.PrimaryColor = PrimaryColor;
                    localStorage.SecondaryColor = SecondaryColor;
                    $('link[title="main"]').attr('href', 'https://code.getmdl.io/1.3.0/material.' + PrimaryColor + '-' + SecondaryColor + '.min.css');
                    swal({
                        type: 'success',
                        title: langpack.settings.color_success,
                        showCancelButton: false
                    });
                }
            }
        }
    }
}

async function editBackgroundColor() {
    const {value: BackgroundColor} = await swal({
        title: 'Update Background Settings',
        text: langpack.settings.backgroundColor,
        input: 'select',
        inputOptions: {
            'true': 'Rainbow',
            'false': 'Random Color'
        },
        inputPlaceholder: 'Select Setting',
        showCancelButton: true,
        confirmButtonText: 'Update',
        inputValidator: (result) => {
            return !result && langpack.settings.backgroundColor_rejected;
        },
        allowOutsideClick: false
    });

    // Runs after SweetAlert is done
    if (BackgroundColor) {
        if (BackgroundColor === 'true') {
            if (localStorage.disableRainbow) {
                delete localStorage.disableRainbow;
            }
            setTimeout(loadBg, 5000);
            swal({
                type: 'success',
                title: langpack.settings.backgroundColor_Rainbow,
            });
        } else {
            localStorage.disableRainbow = 'true';
            setTimeout(loadBg, 5000);
            swal({
                type: 'success',
                title: langpack.settings.backgroundColor_Random_Color,
            });
        }
    }
}

async function editBackgroundSnow() {
    const {value: BackgroundSnow} = await swal({
        title: 'Update Background Snow',
        text: langpack.settings.backgroundSnow,
        input: 'select',
        inputOptions: {
            'true': 'Enable',
            'false': 'Disable'
        },
        inputPlaceholder: 'Select Setting...',
        showCancelButton: true,
        confirmButtonText: 'Update',
        inputValidator: (result) => {
            return !result && langpack.settings.backgroundSnow_rejected;
        },
        allowOutsideClick: false
    });

    // Runs after SweetAlert is done
    if (BackgroundSnow) {
        if (BackgroundSnow === 'true') {
            if (localStorage.disableSnow) {
                delete localStorage.disableSnow;
                $('body').snowfall('clear').snowfall({minSize: 10, maxSize : 20, flakeIndex: 0, image: "files/images/Snowflake.png"});
            }
            swal({
                type: 'success',
                title: langpack.settings.backgroundSnow_Enable,
            });
        } else {
            localStorage.disableSnow = 'true';
            $('body').snowfall('clear');
            swal({
                type: 'success',
                title: langpack.settings.backgroundSnow_Disable,
            });
        }
    }
}