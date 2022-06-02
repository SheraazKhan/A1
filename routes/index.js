var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', heading: 'My Profile',
  para: '' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', heading: 'My Profile',
                        para: ''});
});
/* GET About us page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About', heading: '',
   para: 'My name is Sheraaz Khan and I have studied physio and Massage Therapy. I am a person who enjoys physical activities. I was born in the Caribbean but grew up in Canada.I have tried my best to take advantage of the seasons in Canada. I enjoy Snowboarding in winter and Hiking in the summer.'
});
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects', heading: 'Some of my projects',
   para: '' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services', heading: 'Services' ,
  para: 'I do not offer Services.'});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact us', heading: 'Contact',
  para: 'you can reach me by cell or email' });
});



module.exports = router;
