module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      foo: {
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
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
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
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'jshint']);

};