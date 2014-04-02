module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    traceur: {
      options: {
        // traceur options here
      },
      custom: {
        files:{
          'build/app.js': ['src/*.js']
        }
      }
    },
    watch: {
      files: ['src/*.js'],
      tasks: ['traceur']
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-traceur');

  grunt.registerTask('default', ['watch']);

};