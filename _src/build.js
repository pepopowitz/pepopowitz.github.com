var metalsmith = require('metalsmith');

metalsmith(__dirname)
    .source('.')
    .destination('../build')
    .build(function (err) {
        if (err) {
            throw err;
        }
    });
