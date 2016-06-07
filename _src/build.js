var metalsmith = require('metalsmith');
var jade = require('metalsmith-jade');
var watch = require('metalsmith-watch');
var serve = require('metalsmith-serve');
var layouts = require('metalsmith-layouts');
var sass = require('metalsmith-sass');
var permalinks = require('metalsmith-permalinks');
var metalStatic = require('metalsmith-static');
var drafts = require('metalsmith-drafts');
var collections = require('metalsmith-collections');
var snippets = require('metalsmith-snippet');
var redirect = require('metalsmith-redirect');

var opener = require('opener');
var execFile = require('child_process').execFile;
var path = require('path');

//to run server, call with --server arg.
var runAsServer = process.argv.slice(2) == '--server';

var pipeline = metalsmith(__dirname)
    .source('./content')
    .use(sass({
        sourceMap: true,
        sourceMapContents: true,   // This will embed all the Sass contents in your source maps.
        outputDir: function (originalPath) { 
            // this will change scss/some/path to css/some/path
            return originalPath.replace("scss", "css");
        }
    }))
    .use(drafts())
    .use(collections(
        {
            articles: {
                pattern: 'blog/**/*.jade',
                sortBy: 'sortableDate',
                reverse: true
            }
        }
    ))
    //jade must come after collections.
    .use(jade({
        useMetadata: true,
        filters:{code : function( block ) {
            return block
                .replace( /&/g, '&amp;'  )
                .replace( /</g, '&lt;'   )
                .replace( />/g, '&gt;'   )
                .replace( /"/g, '&quot;' )
                .replace( /#/g, '&#35;'  )
                .replace( /\\/g, '\\\\'  );
        }}
    }))
    .use(layouts({
        engine: 'jade',
        directory: 'layouts'
    }))
    .use(permalinks())
    .use(snippets({
      stop: ['<span class="more">']
    }))
    ;

var port = 3487;
var parentDir = path.resolve(process.cwd(), '..');
    
if (runAsServer) {
    pipeline
        .use(serve({
            port: port,
            verbose: true
        }))
        .use(watch({
            paths: {
                "${source}/**/*": true,
                "layouts/**/*": "**/*.jade"
            },
            livereload: false
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
    .use(redirect({
        '/presentations/staticgen': '/blog/2016/03/staticgen',
        '/wordpress-runs-25-percent': 'http://w3techs.com/technologies/details/cm-wordpress/all/all',
        '/wordpress-vulnerabilities': 'http://www.wpwhitesecurity.com/wordpress-security-news-updates/statistics-70-percent-wordpress-installations-vulnerable/'
    }))
    .destination('../')
    .build(function(err) {
        if (err) {
            throw err;
        }
    });

if (runAsServer) {
    opener('http://localhost:' + port);
}