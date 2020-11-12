let express = require('express');
const app = express();
let router = express.Router();
let mongoose = require('mongoose');
const survey = require('../models/survey');

let passport = require('passport');

let surveyController = require('../controllers/survey');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check is the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Survey Contacts page - READ Operation */
router.get('/', surveyController.displaySurveysList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add',  surveyController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add',  surveyController.processAddPage);

/* GET Route for displaying the EDIT page - UPDATE Operation */
router.get('/edit/:id',  surveyController.displayEditPage);

/* POST Route for processing the EDIT page - UPDATE Operation */
router.post('/edit/:id',  surveyController.processEditPage);

/* GET to perform Deletion - DELETE Operation */
router.get('/delete/:id',  surveyController.performDelete);

module.exports = router;