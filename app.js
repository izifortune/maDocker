
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , dockerps = require('./routes/dockerps')
  , dockerimages = require('./routes/dockerimages')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
  app.locals.basedir = path.join(__dirname, 'public');
  //Cross Domain Allow
  app.all('*', function(req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      next();
  });
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/dockerps', dockerps.list);
app.get('/dockerimages/list', dockerimages.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

//Stoppa un container
app.delete('/dockerps/:id', function(req, res) {
    var sys = require('sys')
    var exec = require('child_process').exec;
    var child;

    var id = req.params.id;
  // executes `pwd`
    child = exec("sudo docker stop " + id, function (error, stdout, stderr) {
        //TODO Farla bloccante
        if (error !== null) {
            console.log('exec error: ' + error);
            res.statusCode = 404;
            return res.send('Error 404: No quote found');
        }
    });

    child.on('exit', function(code) {
        console.log("EXXXIT");
        res.json(true);
    })
});

//TODO Lanciare un immagine
app.post('/dockerimages', function(req, res) {

    var sys = require('sys')
    var exec = require('child_process').exec;
    var child;
    console.log(req.body);

      //if(!req.body.hasOwnProperty('author') ||
         //!req.body.hasOwnProperty('text')) {
        //res.statusCode = 400;
        //return res.send('Error 400: Post syntax incorrect.');
      //}
  // executes `pwd`
    child = exec("sudo docker run -d " + req.body.id, function (error, stdout, stderr) {
        //TODO Farla bloccante
        if (error !== null) {
            console.log('exec error: ' + error);
            res.statusCode = 404;
            return res.send('Error 404: No quote found');
        }
    });

    child.on('exit', function(code) {
        res.json(true);
    })
});
