// seeds/index.js

const mongoose = require("mongoose");
const mongooseeder = require("mongooseeder");
const models = require("../models");
const mongodbUrl = "mongodb://localhost/increment_development";
const { User } = require("../models");

mongooseeder.seed({
  mongodbUrl: mongodbUrl,
  models: models,
  clean: true,
  mongoose: mongoose,
  seeds: () => {
    const users = [];
    const routines = [];
    const exercises = [];

    for (let i = 0; i < 10; i++) {
      let user = new User({
        username: `foobar${i}`,
        email: `foobar${i}@gmail.com`,
        passwordHash: ""
      });

      user.set("password", `password${i}`);
      users.push(user);
    }

    const promises = [];
    const collections = [users, routines, exercises];

    collections.forEach(collection => {
      collection.forEach(model => {
        const promise = model.save();
        promises.push(promise);
      });
    });

    return Promise.all(promises);
  }
});
