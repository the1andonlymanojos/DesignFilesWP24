'use strict';

var utils = require('../utils/writer.js');
var ListingManagement = require('../service/ListingManagementService');

module.exports.listingsGET = function listingsGET (req, res, next, category, seller, price, sortByDate, sortByMinimumBid, limit, offset) {
  ListingManagement.listingsGET(category, seller, price, sortByDate, sortByMinimumBid, limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listingsListingIdGET = function listingsListingIdGET (req, res, next, listingId) {
  ListingManagement.listingsListingIdGET(listingId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listingsListingIdPUT = function listingsListingIdPUT (req, res, next, listingId) {
  ListingManagement.listingsListingIdPUT(listingId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listingsPOST = function listingsPOST (req, res, next) {
  ListingManagement.listingsPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.offersListingIdGET = function offersListingIdGET (req, res, next, listingId) {
  ListingManagement.offersListingIdGET(listingId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
