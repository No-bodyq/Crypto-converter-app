"use strict";

const fp = require("fastify-plugin");
const axios = require("axios");

module.exports = fp(async function (fastify, opts) {
  fastify.decorate("convert", async function (oldCurrency, convertedCurrency) {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?x_cg_api_key=CG-mgJs7qydo7TU4uNUUPhLsxi8&ids=${oldCurrency}&vs_currencies=${convertedCurrency}`
    );
    const result = response.data;
    return result;
  });
});
