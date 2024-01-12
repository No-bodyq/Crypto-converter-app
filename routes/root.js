"use strict";

module.exports = async function (app, opts) {
  app.get("/", async function (request, reply) {
    const ipAddress = request.ip;
    const currencies = await app.getCurrencies();
    try {
      return reply.view("index.ejs", {
        currencies: currencies,
        ip:ipAddress
      });
    } catch (err) {
      reply.code(500).send("Internal Server Error");
    }
  });
};
