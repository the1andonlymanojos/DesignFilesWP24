'use strict';


/**
 * Accept an offer
 *
 * body AcceptOffer 
 * offerId Long 
 * no response value expected for this operation
 **/
exports.offersOfferIdAcceptPOST = function(body,offerId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete an offer (only accessible by the offer creator)
 *
 * offerId Long 
 * no response value expected for this operation
 **/
exports.offersOfferIdDELETE = function(offerId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all offers made by the user
 *
 * limit Integer Limit number of results (optional)
 * offset Integer Offset for pagination (optional)
 * no response value expected for this operation
 **/
exports.usersOffersGET = function(limit,offset) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

