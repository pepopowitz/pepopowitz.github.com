to run the build - 
    node build.js
    
    
or, add npm scripts - 

  "scripts": {
    "build": "node build.js",
    "deploy": "npm run build && cd build && git init . && git add . && git commit -m \"Deploy\"; git push \"git@github.com:blakeembrey/blakeembrey.com.git\" master:gh-pages --force && rm -rf .git"
  }   
  
  and do 
  
    npm run build