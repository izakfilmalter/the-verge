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
      },
      test: {
        options: {
          style: 'expanded'
        },
        files: {
          'the-verge-home/The Verge_files/style-dev.css': 'sass/style-development.sass'
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

    compress: {
      main: {
        options: {
          archive: 'archive.zip',
          mode: 'gzip'
        },
        files: [
          {src: ['www/css/style-dev.min.css'], dest: 'www/css/style-dev.min.css.gzip', filter: 'isFile'},
          {src: ['www/css/style-pro.min.css'], dest: 'www/css/style-pro.min.css.gzip', filter: 'isFile'}
        ]
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
      development: {
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
        cssmin: {
          files: ['www/css/style-dev.css', 'www/css/style-pro.css'],
          tasks: ['cssmin']
        },
        compress: {
          files: ['www/css/style-dev.min.css', 'www/css/style-pro.min.css'],
          tasks: ['compress']
        },
        html: {
          files: ['www/*.html']
        },
        options: {
          livereload: true,
        }
      },

      test2:{
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
        tasks: ['sass:test']
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-compress');

  grunt.registerTask('default', ['connect','watch:development']);
  grunt.registerTask('verge', ['watch:test2']);

};
