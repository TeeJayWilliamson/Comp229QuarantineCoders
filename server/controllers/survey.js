let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let Surveys = require('../models/survey');
let survey = require('../models/survey');

module.exports.displaySurveysList = (req, res, next) => {

    Surveys.find({}).sort('name').exec((err, surveysList) => {
        if(err){
            console.log(err);
            res.end(err);
        } else {
            res.render('survey/list', { title: 'Survey List', SurveyList: surveysList,
                                                    displayName: req.user ? req.user.displayName : ''});
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('survey/add', {title: 'Add Surveys'});
}

module.exports.processAddPage = (req, res, next) => {
    let newSurveys = survey({
        "name": req.body.name,
        "description": req.body.description,
        "q1": req.body.q1,
        "q2": req.body.q2,
        "q3": req.body.q3,
        "q4": req.body.q4,
        "q5": req.body.q5,
    });

    survey.create(newSurveys, (err, survey) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the surveys list
            res.redirect('/surveys-list')
        }
    });
}

module.exports.displayEditPage = ((req, res, next) => {
    let id = req.params.id;

    survey.findById(id, (err, surveysToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('survey/edit',
            {title: 'Edit Surveys', survey: surveysToEdit,
            displayName: req.user ? req.user.displayName : ''});
        }
    });
})

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;
    let updatedSurveys = survey({
        "_id": id,
        "name": req.body.name,
        "description": req.body.description,
        "q1": req.body.q1,
        "q2": req.body.q2,
        "q3": req.body.q3,
        "q4": req.body.q4,
        "q5": req.body.q5,      
    });

    survey.updateOne({_id: id}, updatedSurveys, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the surveys list
            res.redirect('/surveys-list');
        }
    });

}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    survey.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the surveys list
            res.redirect('/surveys-list');
        }
    });
}