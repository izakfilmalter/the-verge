module.exports = function(grunt) {
  grunt.initConfig({

    sass: {
      development: {
        options: {
          style: 'expanded'
        },
        files: {
          'www/css/style-dev.css': 'sass/style-development.sass'
        }
      },
      production: {
        options: {
          style: 'expanded'
        },
        files: {
          'www/css/style-pro.css': 'sass/style-production.sass'
        }
      }
    },

    cssmin: {
      development: {
        files: {
          'www/css/style-dev.min.css': ['www/css/style-dev.css']
        }
      },
      production: {
        files: {
          'www/css/style-pro.min.css': ['www/css/style-pro.css']
        }
      }
    },

    connect: {
      server: {
        options: {
          port: grunt.option('port') || 8000,
          hostname: "localhost",
        }
      }
    },

    watch: {
      sass: {
        files: [
          'sass/*.sass',
          'sass/**/*.sass',
          'sass/**/**/*.sass',
          'sass/**/**/**/*.sass',
          'sass/**/**/**/**/*.sass',
          'sass/*.scss',
          'sass/**/*.scss',
          'sass/**/**/*.scss',
          'sass/**/**/**/*.scss',
          'sass/**/**/**/**/*.scss',
        ],
        tasks: ['sass']
      },
      cssmin:{
        files: ['www/css/style-dev.css', 'www/css/style-pro.css'],
        tasks: ['cssmin']
      },
      html: {
        files: ['www/*.html']
      },
      options: {
        livereload: true,
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['connect','watch']);

};
