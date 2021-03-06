const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String },
  routines: [{ type: Schema.Types.ObjectId, ref: "Routine" }],
  workouts: [{ type: Schema.Types.ObjectId, ref: "Workout" }]
});

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

UserSchema.virtual("password")
  .get(function() {
    return this._password;
  })
  .set(function(value) {
    this._password = value;
    this.passwordHash = bcrypt.hashSync(value, 8);
  });

// Create the model with a defined schema
var User = mongoose.model("User", UserSchema);

const test = new User({ username: "username", email: "email" });
console.log("test =>", test);

module.exports = User;
