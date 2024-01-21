'use strict';


/**
 * Get listings with filters and paging
 *
 * category String Filter by category (optional)
 * seller Integer Filter by seller (user ID) (optional)
 * price BigDecimal Filter by price (optional)
 * sortByDate Boolean Sort by date (true/false) (optional)
 * sortByMinimumBid Boolean Sort by minimum bid (true/false) (optional)
 * limit Integer Limit number of results (optional)
 * offset Integer Offset for pagination (optional)
 * no response value expected for this operation
 **/
exports.listingsGET = function(category,seller,price,sortByDate,sortByMinimumBid,limit,offset) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get details for a specific listing
 *
 * listingId Long 
 * no response value expected for this operation
 **/
exports.listingsListingIdGET = function(listingId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Edit an existing listing
 *
 * listingId Long 
 * no response value expected for this operation
 **/
exports.listingsListingIdPUT = function(listingId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create a new listing
 *
 * no response value expected for this operation
 **/
exports.listingsPOST = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get offers on a specified listing (only accessible by the listing owner)
 *
 * listingId Long 
 * no response value expected for this operation
 **/
exports.offersListingIdGET = function(listingId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

