module.exports = function(grunt) {
  	'use strict';
  	grunt.initConfig({
  		pkg: grunt.file.readJSON('package.json'),
  	});

	var loadedGruntfile = require('../../_template/Gruntfile.js')(grunt);
    
    loadedGruntfile.registerTask('default', loadedGruntfile.taskList['default']);
};