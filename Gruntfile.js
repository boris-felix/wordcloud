module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      build: {
        src: [
          'app/main.js',
          'app/service/Base.js',
          'app/service/Topics.js',
          'app/directive/*.js',
          'app/controller/TagCtrl.js',
          'app/controller/BaseCtrl.js'
        ]
      },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        compress: {
          drop_console: true
        }
      },
      build: {
        src: [
          'app/main.js',
          'app/service/Base.js',
          'app/service/Topics.js',
          'app/directive/*.js',
          'app/controller/TagCtrl.js',
          'app/controller/BaseCtrl.js'
        ],
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'build/index.min.css': ['css/*.css']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'jshint', 'cssmin']);

};