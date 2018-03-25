const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  name: { type: String, required: true },
  muscle_group: { type: String, required: true }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
