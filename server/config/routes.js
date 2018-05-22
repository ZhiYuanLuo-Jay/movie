const mongoose = require('mongoose'), 
    Movie = mongoose.model('Movie');

const movies = require('../controllers/movies.js')

module.exports = function(app){

    //  root
    app.get('/movies', function(req, res){
        movies.index(req, res);
    });

    // create
    app.post('/movie/', function(req, res){
        console.log("I am at routes.js - create");
        movies.create(req, res);
    });

    // show
    app.get('/movie/:id/', function(req, res){
        movies.show(req, res);
    });

    // remove
    app.delete('/movie/:id', function(req, res){
        movies.remove(req, res);
    });

    // remove item
    app.delete('/item/:id', function(req, res){
        movies.delitem(req, res);
    });

     // update
    app.put('/movie/', function(req, res){
        console.log("I am at routes.js - update");
        movies.update(req, res);
    });

}        