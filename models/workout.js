const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    
        day: {
            type: Date,
            default: () => new Date ()
        },
    
exercises: [
    {
        type: {
            type: String,
            trim: true,
            required: "Please enter an exercise"
        },
        name: {
            type: String,
            trim: true,
            required: "Please enter the name of the exercise"
        },
        duration: {
            type: Number,
            required: "Duration required in minutes"
        },
        sets: {
            type: Number
        },

        reps: {
            type: Number
        },

        weight: {
            type: Number
        },
        distance: {
            type: Number
        }
    }
  ]
},
 {
    toJSON: {
        virtuals: true,
    }
 }
  
);

workoutSchema.virtual("totalDuration").get(function(){
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration
    }, 0)
});

const workout = mongoose.model("models", workoutSchema);
module.exports = workout;