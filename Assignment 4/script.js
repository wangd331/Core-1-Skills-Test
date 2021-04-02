//make sure the script file is working
console.log('stop crying');

//load airtable library
let Airtable = require("airtable");

//use airtable library, connect t our base using API key
let base = new Airtable({ apiKey: "key84IGFrxEVOOtlK" }).base("app6iVXyClEq0rpgI");

//get our collection base, select all records (row)

//specify functions that will receive the data
base("albums").select({}).eachPage(gotPageOfAlbums, gotAllAlbums);

//create empty array to hold data (const = var)
const albums = [];

//callback function that receives data
function gotPageOfAlbums(records, fetchNextPage){
    console.log("gotPageOfAlbums()");
    //add the records from this page to our array
    albums.push(...records);
    //request more pages
    fetchNextPage();
}

//call back function that is called when all pages are loaded (err stands for error)
function gotAllAlbums(err){
    console.log("gotAllAlbums()");
    //report an error
    if (err){
        console.log("error loading data");
        console.error(err);
        return;
    }
    //call functions to log and show the albums
    consoleLogAlbums();
    showAlbums();
}

//loop through the albums and console.log them
function consoleLogAlbums(){
    console.log("consoleLogAlbums()");
    albums.forEach((album) => {
        console.log("Album:", album);
    });
}

let container = document.querySelector("#container");
//look through our airtable data, create elements
function showAlbums() {
    console.log("showAlbums()");
    albums.forEach((album) => {
        //create element to show album artwork
        var albumImage = document.createElement("img");
        albumImage.src = album.fields.artwork[0].url;
        container.append(albumImage);
        //create element to show song name
        var songTitle = document.createElement("h2");
        songTitle.innerText = album.fields.song;
        container.append(songTitle);
        //create element to show album title
        var albumTitle = document.createElement("p");
        albumTitle.innerText = album.fields.title;
        container.append(albumTitle);
        //create element to show album artist
        var nameOfArtist = document.createElement("p");
        nameOfArtist.innerText = album.fields.artist;
        container.append(nameOfArtist);
    });
}