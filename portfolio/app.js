const express = require('express');
const covidApp = require('./apps/covid-app/app');
const app = express();
app.listen(3000);

// register views engine
app.set('view engine', 'ejs');

// set static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/images', express.static(__dirname + 'public/images'));
app.use('/resume', express.static(__dirname + 'public/resume'));
// app.use('/scripts', express.static(__dirname + 'public/scripts'));
app.use('/data', express.static(__dirname + 'public/data'));
app.use(express.urlencoded({extended: true}));
app.use(express.static('apps'));
app.use('/css', express.static(__dirname + 'apps/memory-game/css'));


// set views
app.get('/', (req, res) => {
    res.render('index', {title: 'Home'});
});

app.get('/memory-game', (req, res) => {
    res.render('../apps/memory-game/files/memory_game', {title: 'Memory Game'});
})
app.get('/challenge', (req, res) => {
    res.render('challenge', {title: 'Challenges'})
})

app.use('/covid-app', covidApp);

