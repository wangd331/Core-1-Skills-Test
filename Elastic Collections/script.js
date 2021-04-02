//make sure the script file is working
console.log('you got this bitchhh');

//load airtable library
let Airtable = require("airtable");

//use airtable library, connect t our base using API key
let base = new Airtable({ apiKey: "key84IGFrxEVOOtlK" }).base("appPfbi2JyyRZDB5w");

//get our collection base, select all records (row)

//specify functions that will receive the data
base("locations").select({}).eachPage(gotPageOfLocations, gotAllLocations);

//create empty array to hold data (const = var)
const locations = [];

//callback function that receives data
function gotPageOfLocations(records, fetchNextPage){
    console.log("gotPageOfLocations()");
    //add the records from this page to our array
    locations.push(...records);
    //request more pages
    fetchNextPage();
}

//call back function that is called when all pages are loaded (err stands for error)
function gotAllLocations(err){
    console.log("gotAllLocations()");
    //report an error
    if (err){
        console.log("error loading data");
        console.error(err);
        return;
    }
    //call functions to log and show the albums
    consoleLogLocations();
    showLocations();
}

//loop through the locations and console.log them
function consoleLogLocations(){
    console.log("consoleLogLocations()");
    locations.forEach((location) => {
        console.log("Location:", location);
    });
}

//look through our airtable data, create elements
function showLocations() {
    console.log("showLocations()");
    locations.forEach((location) => {
        //create element to show location coordinate
        var locationCoordinate = document.createElement("h1");
        locationCoordinate.innerText = location.fields.coordinates;
        document.body.append(locationCoordinate);
        //create element to show location caption
        var locationCaption = document.createElement("p");
        locationCaption.innerText = location.fields.caption;
        document.body.append(locationCaption);
        //create element to show location image
        var locationImage = document.createElement("img");
        locationImage.src = location.fields.images[0].url;
        document.body.append(locationImage);
    });
}