module.exports = function(grunt) {
	'use strict';

	require('../../Gruntfile.js')(grunt);

	grunt.config('update-gist', {
		auth: {
			type: 'oauth',
			token: '3f7a8e8ef291413da51393150fcf3a8a7f900edd'
		},
		file: {
			gistId: 'b1db1ae0d5c837a0eb17',
			filename: '<%= pkg.name %>.html',
			file: 'build/<%= pkg.name %>.build.html'
		}
	});
};