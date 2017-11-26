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

function bugreport() {
    if (platform.prerelease !== null) {
        betacheck = platform.prerelease
    } else {
        betacheck = "Stable"
    }

    if (development === true) {
        developmentcheck = "Unstable"
    } else {
        developmentcheck = "Stable"
    }

    OpenAudioAPI.generateDialog({
        dialogWidth: "571px",
        textTitle: 'Bug Report Information',
        htmlContent: "<b>Send this in a snapshot to Spigot Page or in our discord.</b>\n" +
        "<br>\n" +
        "<table class=\"mdl-data-table mdl-js-data-table\" style=\"overflow-y: auto; max-height: 250px;\">\n" +
        "  <tbody>\n" +
        "    <tr>\n" +
        "      <td class=\"mdl-data-table__cell--non-numeric\">Browser</td>\n" +
        "      <td>"+ platform.name +"</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "      <td class=\"mdl-data-table__cell--non-numeric\">Browser Version</td>\n" +
        "      <td>"+ platform.version +"</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "      <td class=\"mdl-data-table__cell--non-numeric\">Product Layout</td>\n" +
        "      <td>"+ platform.layout +"</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "      <td class=\"mdl-data-table__cell--non-numeric\">Product OS Type</td>\n" +
        "      <td>"+ platform.os.family +"</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "      <td class=\"mdl-data-table__cell--non-numeric\">Product OS Version</td>\n" +
        "      <td>"+ platform.os.version +"</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "      <td class=\"mdl-data-table__cell--non-numeric\">OS Base</td>\n" +
        "      <td>"+ platform.os.architecture +"-bit</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "      <td class=\"mdl-data-table__cell--non-numeric\">OS Release Status</td>\n" +
        "      <td>"+ betacheck +"</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "      <td class=\"mdl-data-table__cell--non-numeric\">Browser Info (Just Incase it nulls)</td>\n" +
        "      <td>"+ platform.description +"</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "      <td class=\"mdl-data-table__cell--non-numeric\"></td>\n" +
        "      <td></td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "      <td class=\"mdl-data-table__cell--non-numeric\">Web Client Dev Build Version</td>\n" +
        "      <td>"+ devBuild +" for "+ devVersion +"</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "      <td class=\"mdl-data-table__cell--non-numeric\">Web Client Release Status</td>\n" +
        "      <td>"+ developmentcheck +"</td>\n" +
        "    </tr>\n" +
        "  </tbody>\n" +
        "</table>",
        optionButtonHide: "true"
    })
}