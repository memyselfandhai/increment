const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Routine = require("./routine");
const Exercise = require("./exercise");

const WorkoutSchema = new Schema(
  {
    routine: { type: Schema.Types.ObjectId, ref: "Routine" },
    set: [{ type: Schema.Types.ObjectId, ref: "Exercise" }, Number]
  },
  {
    timestamps: true
  }
);

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
