//json data
// https://obscure-eyrie-11833.herokuapp.com/
const db = require("../models");

module.exports = function (app) {
    //all workouts
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(dbWorkout => {
            res.json(dbWorkout);
        })
            .catch(err => {
                res.status(400).json(err);
            });
    })

    app.get("/api/workouts/range", ({ }, res) => {
        db.Workout.find({}).then((dbWorkout) => {
            res.json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
        });
    });
    //create workout
    app.post("/api/workouts/", (req, res) => {
        db.Workout.create(req.body).then((dbWorkout) => {
            res.json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
        });
    });
    //findby id and update one workout
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(
            //id and excercises
            { _id: req.params.id }, { exercises: req.body }
        ).then((dbWorkout) => {
            res.json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
        });
    });
};
//all routes working on localhost, heroku deploy is not working though