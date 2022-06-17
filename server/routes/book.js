let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

// connect to our Book Model
//let Book = require('../models/book');

let bookController = require('../controllers/book');

//help function for guard puposes
function requireAuth(req, res, next)
{
    //check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Book List page - READ OPeration */
router.get('/', bookController.displayBookList);

/* GET Route for displaying the Add page- Create Operation */
router.get('/add', requireAuth, bookController.displayAddPage);

/* POST Route for processing the Add page- Create Operation */
router.post('/add', requireAuth, bookController.processAddPage);


/* GET Route for displaying the Edit page- Update Operation */
router.get('/edit/:id', requireAuth, bookController.displayEditPage);


/* POST Route for processing the Edit page- Update Operation */
router.post('/edit/:id',requireAuth,  bookController.processEditPage);

/* GET Route for deleting - DELETE Operation */
router.get('/delete/:id', requireAuth, bookController.performDelete);

module.exports = router;