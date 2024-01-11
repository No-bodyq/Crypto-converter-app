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
    let value = parseInt(request.body.currencyValue) * data[`${enteredCurr}`][`${convertedCurr}`];
    try {
      return reply.view("index.ejs", {
        currencies: currencies,
        data: data,
        oldCurr: oldCurr,
        newCurr: newCurr,
        value:value
      });
    } catch (err) {
      reply.code(500).send("Internal Server Error");
    }
  });
};
