const router = require ("express").Router();
const Workout = require("../models/workout.js");


router.post("/api/workouts", (req, res) => {
Workout.create(req.body)
.then(dbWorkout => {
    res.json(dbWorkout);
})
.catch(err => {
    res.json(err);
  });
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id,
        { $push: { exercises: req.body} },
        { new: true, runValidators: true }
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.delete("/api/workouts", (req, res) => {
    Workout.findByIdAndDelete(req.body.id).then(() => {
        res.json(true)
    })
    .catch(err => {
        res.json(err);
    });
});



module.exports = router;