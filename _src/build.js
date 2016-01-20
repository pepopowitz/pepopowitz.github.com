var metalsmith = require('metalsmith');
var jade = require('metalsmith-jade');
var watch = require('metalsmith-watch');
var serve = require('metalsmith-serve');
var opener = require('opener');
var execFile = require('child_process').execFile;
var path = require('path');

//to run server, call with --server arg.
var runAsServer = process.argv.slice(2) == '--server';

var pipeline = metalsmith(__dirname)
    .source('./content')
    .use(jade({
        useMetadata: true
    }));

var port = 3487;
var parentDir = path.resolve(process.cwd(), '..');
    
if (runAsServer) {
    pipeline
        .use(serve({
            port: port,
            verbose: true
        }))
        .use(watch({
            pattern: '**/*',
            livereload: true
        }));
}

pipeline
    .clean(false)
    .use(function (files, metalsmith, done) {
        execFile('cleanup.bat', { cwd: parentDir }, function (err, stdout, stderr) {
            if (err) {
                console.log('Error executing cleanup.bat: ',err);
            }
            done();
        });
    })
    .destination('../')
    .build(function (err) {
        if (err) {
            throw err;
        }
    });

if (runAsServer) {
    opener('http://localhost:' + port);
}