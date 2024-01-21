'use strict';

var utils = require('../utils/writer.js');
var OfferManagement = require('../service/OfferManagementService');

module.exports.offersOfferIdAcceptPOST = function offersOfferIdAcceptPOST (req, res, next, body, offerId) {
  OfferManagement.offersOfferIdAcceptPOST(body, offerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.offersOfferIdDELETE = function offersOfferIdDELETE (req, res, next, offerId) {
  OfferManagement.offersOfferIdDELETE(offerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersOffersGET = function usersOffersGET (req, res, next, limit, offset) {
  OfferManagement.usersOffersGET(limit, offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
