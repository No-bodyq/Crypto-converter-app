"use strict";

module.exports = async function (app, opts) {
  app.post("/", async function (request, reply) {
    const data = await app.convert(
      request.body["enteredCurrency"],
      request.body["convertedCurrency"]
    );
    return data;
  });
};
