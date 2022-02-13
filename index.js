const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
let redditData = require('./data.json')

app.set('views', path.join(__dirname, 'views')) // for views
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public')); // for assets

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/r/:subreddit', (req, res) => {
  const {subreddit} = req.params;
  const data = redditData[subreddit];
  if(data){
    res.render('subreddit', {...data});
  } else{
    res.render('notfound',{subreddit});
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})