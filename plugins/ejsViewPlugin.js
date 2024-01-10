const fp = require("fastify-plugin");
const path = require("path");

module.exports = fp(function (app, opts, done) {
  app.register(require("@fastify/view"), {
    engine: {
      ejs: require("ejs"),
    },
    templates: path.join(__dirname, "..", "views"),
  });

  app.register(require("@fastify/formbody"));

  done();
});
