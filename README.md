the-verge
=========

Decompiling The Verges css to make it better.

Build is rather simple. Clone project and run npm install within the root.

Once npm is done, make sure you have grunt cli installed and runt grunt. 

Grunt handles the building of the sass into 2 sets of css files, develop has non minified class names and production has minified class names.

Un comment the imports in the /sass/vendor/vendor.sass file to see the projects css plus the unimported css. This takes a while to build cause ruby is the fastest language ever. 

File structure is based on modern-style. 

Componenets contains styles for blocks.
Element containes overrides on html5 elemenets.
Env contains the sass vairiables for the short and long class names.
Grid contains grid files
Helpers contains global variables, mixins, extends, z-index, and more.
Media contains folders for each media querry with the same set of files and folders as the root.
Typography contains global typography styles like font-size, color, and more.
Vendor contains css that comes from outside the project.
