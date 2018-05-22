module.exports = function(mongoose){
    var MovieSchema = new mongoose.Schema({
        title: { type: String, required: [true, 'Movies must have a title'], minlength: [3, "Minimun 3 characters is required"] },
        review: [{
            name: { type: String, required: [true, 'You must provide your name'], minlength: [3, "Minimun 3 characters is required"] },
            star: { type: Number, default: 1 },
            content: { type: String, required: [true, 'You must provide your review'], minlength: [3, "Minimun 3 characters is required"] },
          }],

        }, { timestamps: true })
    mongoose.model('Movie', MovieSchema); 
}
