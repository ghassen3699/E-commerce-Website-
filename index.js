const express = require('express');
const ejs = require('ejs');

const app = express();
app.use(express.static('public'))
app.set('view engine', 'ejs')




// GET method of test page
app.get('/', function(req, res) {
    res.render('pages/index')
});


// listen PORT
app.listen(3000, function() {
    console.log('server run ')
});