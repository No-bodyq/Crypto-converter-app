"use strict";

module.exports = async function (app, opts) {
  app.post("/", async function (request, reply) {
    let enteredCurr = request.body["enteredCurrency"];
    let convertedCurr = request.body["convertedCurrency"];
    let data = await app.convert(enteredCurr, convertedCurr);
    const currencies = await app.getCurrencies();
    let oldCurr = currencies.find((currency) => currency.id === enteredCurr);
    let newCurr = currencies.find(
      (currency) => currency.vs_currency === convertedCurr
    );
    try {
      return reply.view("index.ejs", {
        currencies: currencies,
        data: data,
        oldCurr: oldCurr,
        newCurr: newCurr,
      });
    } catch (err) {
      reply.code(500).send("Internal Server Error");
    }
  });
};
