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

/*
AUTO DJ SCRIPT FROM
https://github.com/Mindgamesnl/SM2_Playlist_Thingy
*/
var AutoDj = {};
AutoDj.AddedCount = 1;
AutoDj.IdOfNowPlaying = 0;
AutoDj.AddSong = function(File) {
    PlayList_songs["_" + AutoDj.AddedCount] = {
        "File": File
    };
    this.AddedCount++;
    PlayList_songs["_" + AutoDj.AddedCount] = "end";
};
AutoDj.LoadAll = function() {
    var thiscount = 1;
    while (PlayList_songs["_" + thiscount] != "end") {
        var this_item = PlayList_songs["_" + thiscount];
        AutoDj["SongData_" + thiscount] = {
            "File": this_item.File,
            "CanBePlayed": true
        };
        console.log("AutoDj: Song loaded with ID:" + thiscount);
        thiscount++
    }
    if (PlayList_songs["_" + thiscount] == "end") {
        var loadedcount = thiscount - 1;
        console.log("AutoDj: Loading done (loaded a total of " + loadedcount + " songs.)");
    }
};
AutoDj.Check = function(song_id) {
    if (AutoDj["SongData_" + song_id] != null) {
        var thisdata = AutoDj["SongData_" + song_id];
        if (thisdata.CanBePlayed === true) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};
AutoDj.Play = function(FNC_ID) {
    if (this.Check(FNC_ID) === true) {
        var thisdata = AutoDj["SongData_" + FNC_ID];
        AutoDj.SoundManager_Play(thisdata.File, FNC_ID)
    } else {
        console.warn("AutoDj: " + FNC_ID + " not playing due to an error. Try rerunning the command again in game");
        AutoDj.PlayNext();
    }
};
AutoDj.SoundManager_Play = function(fnc_file, id) {
    var mySoundObject = soundManager.createSound({
        id: "AutoDj_" + id,
        url: fnc_file,
        volume: volume,
        autoplay: true
    });

    function playSound(sound) {
        sound.play({
            onfinish: function() {
                AutoDj.PlayNext();
            },
            onerror: function() {
                console.error("AutoDj: An error occured while playing ID: " + id + ". Check the URL in playlist.yml. Playing next song in playlist");
                soundManager.destroySound("AutoDj_" + id);
                AutoDj.PlayNext();
            }
        });
    }

    playSound(mySoundObject);

    AutoDj.stopPlaylist = function() {
        fadeIdOut("AutoDj_" + id);
        soundManager.destroySound("AutoDj_" + id);
    }
};
AutoDj.PlayNext = function() {
    var VolgendeLiedje = AutoDj.IdOfNowPlaying + 1;
    if (AutoDj.Check(VolgendeLiedje) === true) {
        AutoDj.Play(VolgendeLiedje);
        AutoDj.IdOfNowPlaying++
    } else {
        AutoDj.IdOfNowPlaying = 1;
        AutoDj.Play(AutoDj.IdOfNowPlaying);

    }
};