var express = require('express');
var router = express.Router();

/* Get home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jinal Patel Portfolio',
                        message: 'my first page'} );
});


/* Get about page */
router.get('/about', function(req, res, next) {
   res.render('about'); 
});

/*Get projects page*/

router.get('/projects', function(req, res, next) {
   res.render('projects'); 
});

/*Get services page*/

router.get('/services', function(req, res, next) {
   res.render('services'); 
});



module.exports = router;
