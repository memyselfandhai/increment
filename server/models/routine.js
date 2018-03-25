const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Exercise = require("./exercise");

const RoutineSchema = new Schema({
  exercises: [{ type: Schema.Types.ObjectId, ref: "Exercise" }]
});

const Routine = mongoose.model("Routine", RoutineSchema);

module.exports = Routine;
