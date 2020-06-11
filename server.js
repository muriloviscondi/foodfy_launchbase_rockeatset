const express = require('express');
const nunjucks = require('nunjucks');
const { response } = require('express');

const server = express();

const recipes = require('./data')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
  express: server
})

server.get('/', function(request, response) {
  const featured = [];

  for (let i = 0; i < 6; i++) {
    featured.push({
      id: recipes[i].id,
      description: recipes[i].description,
      author: recipes[i].author,
    })
  }

  return response.render('home', { items: featured })
})

server.get('/about', function(request, response) {
  return response.render('about')
})

server.get('/recipes', function(request, response) {
  return response.render('recipes', { items: recipes })
})

server.listen(5000, function() {
  console.log("Server is running!")
})