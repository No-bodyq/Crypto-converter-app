"use strict";

const fp = require("fastify-plugin");

let currencies = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    vs_currency: "btc",
  },
  {
    id: "ethereum",
    name: "Ethereum",
    vs_currency: "eth",
  },
  {
    id: "binancecoin",
    name: "BNB",
    vs_currency: "bnb",
  },
  {
    id: "litecoin",
    name: "Litecoin",
    vs_currency: "ltc",
  },
  {
    id: "bitshares",
    name: "Bitshares",
    vs_currency: "bits",
  },
  {
    id: "bitcoin-cash",
    name: "Bitcoin Cash",
    vs_currency: "bch",
  },
];

module.exports = fp(async function (fastify, opts) {
  fastify.decorate("getCurrencies", function () {
    return currencies;
  });
});
