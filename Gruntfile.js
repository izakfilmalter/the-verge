module.exports = function(grunt) {
  grunt.initConfig({

    sass: {
      development: {
        options: {
          style: 'expanded'
        },
        files: {
          'www/css/style.css': 'sass/style.sass'
        }
      }
    },

    cssmin: {
      development: {
        files: {
          'www/css/style.min.css': ['www/css/style.css']
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
        files: ['www/css/style.css'],
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
