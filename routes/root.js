"use strict";

module.exports = async function (app, opts) {
  app.get("/", async function (request, reply) {
    const currencies = await app.getCurrencies();
    try {
      return reply.view("index.ejs", {
        currencies: currencies,
      });
    } catch (err) {
      reply.code(500).send("Internal Server Error");
    }
  });
};
