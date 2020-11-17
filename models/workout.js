const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
exercises: [
    {
        type: {
            type: String,
            require: "Please enter an exercise"
        },
        name: {
            type: String,
            require: "Please enter a name"
        },
        duration: {
            type: Number,
            require: "Duration required"
        },
        sets: {
            type: Number,
        },

        reps: {
            type: Number,
        },

        weight: {
            type: Number
        },
        distance: {
            type: Number
        }
    }
]
});
  




const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;