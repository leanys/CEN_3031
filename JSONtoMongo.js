'use strict';

/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    listings = require('./listings.json'),
    config = require('./config');
/* Connect to your database */
var listingArr = [];
listings.entries.forEach(function(entry) {
  listingArr.push(new Listing(entry))
});

mongoose.connect(config.db.uri).then(function(){
  console.log("Connection worked!")
  return Listing.insertMany(listingArr);
})
.then(function(){
  console.log("connection closed")
  mongoose.connection.close();
}
);


/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */


//Start here
//var mongoose = require('mongoose');
//var Schema = mongoose.Schema;



// the schema is useless so far
// we need to create a model using it
//var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
//module.exports = User;


//End here


/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */