tasks:
    npm run build - 
        generates the content
    npm start -
        generates the content & starts a static server



to run the build - 
    node build.js
    
    
or, add npm scripts - 

  "scripts": {
    "build": "node build.js",
    "deploy": "npm run build && cd build && git init . && git add . && git commit -m \"Deploy\"; git push \"git@github.com:blakeembrey/blakeembrey.com.git\" master:gh-pages --force && rm -rf .git"
  }   
  
  and do 
  
    npm run build
    
to run the site locally - 
    node build.js --server
or, add npm script - 
    "scripts":{
        ...
        "start": "node build.js --server"
    }
    and do 
    
        npm start

TODO - 
collections
snippets
navigation
highlight.js for syntax highlighting
http://purecss.io/layouts/ instead of bootstrap?


problems - 
using collections should add a "path" property to every item in collection. according to console.log, it DOES. but index.jade writes empty values for all of the paths. wtf? 
    temporary hack is to specify url in the frontmatter, and spit out that one instead. 