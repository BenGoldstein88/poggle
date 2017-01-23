var path = require('path');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080

// using webpack-dev-server and middleware in development environment
if(process.env.NODE_ENV !== 'production') {
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var webpack = require('webpack');
  var config = require('./webpack.config');
  var compiler = webpack(config);
  
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'src')));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/dist/index.html')
});

// app.get('/samplemidi', function(request, response) {
//   response.sendFile(__dirname + '/dist/e2a3d34792d711c95dfd5cebc615c109.mid')
// })

// app.get('/test', function(request, response) {
//   response.sendFile(__dirname + '/')
// })

app.listen(PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  }
});
