const mongoose = require('mongoose'),
Movie = mongoose.model('Movie');

module.exports = 
{
    index: function(req, res){
        Movie.find({}, function(err, movies){
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err})
            }
            else {
                res.json({message: " Show all movies, Success", data: movies})
            }
        })
    },

    create: function(req, res){
        var movie = new Movie();
        console.log("Controller", req.body); // for using the submit form, we use req.body not req.params
        movie.title = req.body.title;
        movie.review = req.body.review;
        console.log(req.body.review);

        movie.save(function(err){
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            }
            else
            {
                res.json({message:"New movie added" ,data: movie});
            }
        })
    },

    show: function(req, res){
        console.log('req.parmas', req.params);
        Movie.findOne({_id: req.params.id}, function(err, data){
            if(err){
                console.log("Got an error", err.message);
                res.json({message: "Error", error: err});
            } else if(!data) {
                res.json({message: "MongoDB could not find one."});
            }
            else {
                res.json({message:"Success", info:data});
            }
        })
    },

    remove: function(req, res){
        // console.log('req.parmas', req.params);
        Movie.remove({_id: req.params.id}, function(err, data){
            if(err){
                console.log("Got an error", err.message);
                res.json({message: "Error", error: err});
            } else {
                res.json({message:"Success", info:data});
            }
        })
    },
    
    update: function(req, res){
        console.log('req.body', req.body);
        Movie.findOne({_id: req.body.id}, function(err, data){
            if(err){
                console.log("Got an error", err.message);
                res.json({message: "Error", error: err});
            } else if(!data) {
                res.json({message: "MongoDB could not find one."});
            } else {
                data.review.push(req.body.review[0]);
                data.save(function(err){
                    if(err){
                        console.log("Got an error", err.message);
                        res.json({message: "Error", error: err});
                    } else {
                        res.json({message:"Success", info:data});
                    }
                })
            }
        })
    },
}

