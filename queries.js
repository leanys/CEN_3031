/* Fill out these functions using Mongoose queries*/
var mongoose = require('mongoose'), 
config = require('./config'),
Listing = require('./ListingSchema.js');


var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.findOne( {code: "LBW" }).then(function(entry){
    console.log(entry);
  });
  
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listing.findOne( {code: "CABL" }).then(function(entry){
    console.log(entry);
    Listing.remove(entry);
  });

};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  Listing.findOneAndUpdate( {code: "PHL" }, {$set: {address: "Phelps Lab, Gainesville. FL, 32603"}}, {new: true}, function(err, data){
    console.log(entry);
  
  });
}
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listing.find({}).then(function(entry){
    console.log(entry);
  })
};
//////



mongoose.connect(config.db.uri).then(function(){
  console.log("Connection worked!")
  return Listing.insertMany(listingArr);
  //call function here
  findLibraryWest();
  removeCable();
  updatePhelpsLab();
  retrieveAllListings();
  //dont forget to hit ctrl c
});