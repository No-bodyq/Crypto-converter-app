"use strict";

module.exports = async function (app, opts) {
  app.get("/", async function (request, reply) {
    try {
      return reply.view("weather.ejs");
    } catch (err) {
      reply.code(500).send("Internal Server Error");
    }
  });
};
