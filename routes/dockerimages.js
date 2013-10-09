exports.list = function(req, res){
  var sys = require('sys')
  var exec = require('child_process').exec;
  var child;
  var ps = [];

  // executes `pwd`
  child = exec("sudo docker images", function (error, stdout, stderr) {
      stdout = stdout.split('\n');
      console.log(stdout);
      for (var i = 1; i < stdout.length; i++ ) {
          var splitted = stdout[i].split(' ');

          //Rimuovo spazi interni
          for (var j = 0, l = splitted.length; j < l; j++) {
              var v = splitted[j];
              if (v === '') {
                  splitted.splice(j,1);
                  j = j -1;
              }
          }
          console.log(splitted);
          ps.push({
              repository: splitted[0],
              tag: splitted[1],
              id: splitted[2]
          });
      }
      if (error !== null) {
          console.log('exec error: ' + error);
      }
      res.json(ps);
  });
};

