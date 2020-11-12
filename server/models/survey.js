let mongoose = require('mongoose');

// create a model class
let surveysModel = mongoose.Schema({
    name: String,
    description: String,
    q1: String,
    q2: String,
    q3: String,
    q4: String,
    q5: String
},

{
    collection: "Surveys"
    
});

module.exports = mongoose.model('Surveys', surveysModel); 
