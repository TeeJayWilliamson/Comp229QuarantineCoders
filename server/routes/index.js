let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET  HOME page. */
router.get('/', indexController.displayHomePage);

/* GET  HOME page. */
router.get('/home', indexController.displayHomePage);

/* GET ABOUT US page. */
router.get('/about', indexController.displayAboutPage);

/* GET PROJECTS page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET SERVICES page. */
router.get('/services', indexController.displayServicesPage);

/* GET CONTACT US page. */
router.get('/contact', indexController.displayContactPage);

/* GET Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexController.processRegisterPage);

/* GET to perform User Logout */
router.get('/logout', indexController.performLogout);

module.exports = router;
