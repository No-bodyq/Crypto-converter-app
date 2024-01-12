"use strict";

module.exports = async function (app, opts) {
  app.post("/", async function (request, reply) {
    const enteredCurr = request.body["enteredCurrency"];
    const convertedCurr = request.body["convertedCurrency"];
    const data = await app.convert(enteredCurr, convertedCurr);
    const ipAddress = request.ip;
    const currencies = await app.getCurrencies();
    const oldCurr = currencies.find((currency) => currency.id === enteredCurr);
    const newCurr = currencies.find(
      (currency) => currency.vs_currency === convertedCurr
    );
    let value =
      parseInt(request.body.currencyValue) *
      data[`${enteredCurr}`][`${convertedCurr}`];
    try {
      return reply.view("index.ejs", {
        currencies: currencies,
        data: data,
        oldCurr: oldCurr,
        newCurr: newCurr,
        value: value,
        convCurr:convertedCurr,
        entCurr:enteredCurr,
        ip:ipAddress
      });
    } catch (err) {
      reply.code(500).send("Internal Server Error");
    }
  });
};
