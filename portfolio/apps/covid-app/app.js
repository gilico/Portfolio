const express = require('express');
const worldDataRoutes = require('./routes/worldWide-routes');
const israelDataRoutes = require('./routes/israel-data-routes');
const generalIsraelRoutes = require('./routes/genral-israel-routes');

const app = express();
const router = express.Router();

// set static files
router.use(express.static('public'));
router.use(express.urlencoded({extended: true}))
router.use(express.static('data'));

// set views
router.get('/', (req, res) => {
    res.render('../apps/covid-app/views/covid-index', {title: 'דף הבית'});
});

// express routes - israel cities data 
router.use('/israel-data', israelDataRoutes);

// express routes - data by countries 
router.use('/worldWide-data', worldDataRoutes);

// express routes - israel general data 
router.use('/general-israel', generalIsraelRoutes);

 module.exports = router;
