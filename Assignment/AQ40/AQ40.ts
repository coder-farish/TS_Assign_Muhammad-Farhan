//40. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
// Author: Muhammad Farhan
// Date: 18th Feb 2024
// writing make_album function with an optional parameter for the number of tracks
function make_album(artist_name: string, album_title: string, album_tracks?: number): { Artist: string, Title: string, Tracks?: number } {
    const music_album = { Artist: artist_name, Title: album_title, Tracks: album_tracks };
    if (album_tracks !== undefined) {
        music_album.Tracks = album_tracks;
    }
    return music_album;
}

// Creating three dictionaries representing different albums of artists name and optional sound track valyes
const dictionary1 = make_album("Atif Aslam", "Jal Pari");
const dictionary2 = make_album("Fuzon", "Saagar", 11); // Including number of tracks
const dictionary3 = make_album("Ali Haider", "Zalim Nazron Say", 15);

// Printing the dictionaries values to show that Objects are storing the album information correctly
console.log("Dictionary 1:",dictionary1);
console.log("Dictionary 2:",dictionary2);
console.log("Dictionary 3:",dictionary3);