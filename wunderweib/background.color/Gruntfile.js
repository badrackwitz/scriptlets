module.exports = function(grunt) {
	'use strict';

	require('../../Gruntfile.js')(grunt);

	grunt.config('update-gist', {
		auth: {
			type: 'oauth',
			token: '3f7a8e8ef291413da51393150fcf3a8a7f900edd'
		},
		file: {
			gistId: '995056b3ab8463f98175',
			filename: '<%= pkg.name %>.html',
			file: 'build/<%= pkg.name %>.build.html'
		}
	});
};