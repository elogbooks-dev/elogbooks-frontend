# Elogbooks Test Frontend

#### Installation
1. Run: 
    - npm install (that should install bower_components if not run 'bower install')
    - npm start

#### Quick code guide
To register new files add them on bottom of app/index.html

App structure
* app
    * modules
        * job (here goes all job related code)
            * create (folder per functionality containing [controller, template file])
            * list
            * view
            * routes.js (contains routes for job section)
        * quote (here goes all quote related code)
            * same as ^