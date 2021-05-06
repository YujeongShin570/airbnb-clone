const express = require('express');
// const app2 = require('./app2');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
  res.render('main.html');
})

app.get('/search', function (req, res) {
  res.render('search.html');
})

console.log("server on!");
app.listen(3000);