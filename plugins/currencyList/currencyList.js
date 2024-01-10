"use strict";

const fp = require("fastify-plugin");

let currencies = [
  {
    id: "btc",
    name: "Bitcoin",
  },
  {
    id: "eth",
    name: "Ethereum",
  },
  {
    id: "ngn",
    name: "Naira",
  },
  {
    id: "usd",
    name: "US Dollars",
  },
  {
    id: "trx",
    name: "Tron",
  },
  {
    id: "doge",
    name: "Dogecoin",
  },
];

module.exports = fp(async function (fastify, opts) {
  fastify.decorate("getCurrencies", function () {
    return currencies;
  });
});
