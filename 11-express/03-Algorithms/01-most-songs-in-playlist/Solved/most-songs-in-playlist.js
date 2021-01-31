// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function(arr) {
  var sortedArr = arr.sort();
  var totalMins = 0;
  var totalSongs = 0;

  for (var i = 0; i < sortedArr.length; i++) {
    var currentSongDuration = sortedArr[i];

    if (totalMins + currentSongDuration <= 60) {
      totalMins += currentSongDuration;
      totalSongs++;
    } else {
      return totalSongs;
    }
  }

  return totalSongs;
};
