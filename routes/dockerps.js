exports.list = function(req, res){
  var sys = require('sys')
  var exec = require('child_process').exec;
  var child;
  var ps = [];
  var ports = [];

  // executes `pwd`
  child = exec("sudo docker ps", function (error, stdout, stderr) {
      stdout = stdout.split('\n');
      for (var i = 1; i < stdout.length; i++ ) {
          var splitted = stdout[i].split(' ');
          for (var i = 0, l = splitted.length; i < l; i++) {
              var v = splitted[i];
              if (v === '') {
                  splitted.splice(i,1);
                  i = i -1;
              }
          }
          var l = splitted.length-1;
          while (l > 0) {
              var v = splitted[l];
              if (v.indexOf('->') !== -1) {
                  ports.push(v);
              }
              l = l-1;
          }
          console.log(splitted);
          var pid = splitted[0];
          if (pid) {
              ps.push({
                  id: pid,
                  name: splitted[1],
                  ports: ports
              });
          }
      }
      if (error !== null) {
          console.log('exec error: ' + error);
      }
      res.json(ps);
  });
};
