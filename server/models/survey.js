let mongoose = require('mongoose');

// create a model class
let surveysModel = mongoose.Schema({
    name: String,
    question1: String,
    question2: String,
    question3: String,
    question4: String,
    question5: String,
},

{
    collection: "Surveys"
    
});

module.exports = mongoose.model('Surveys', surveysModel); 
