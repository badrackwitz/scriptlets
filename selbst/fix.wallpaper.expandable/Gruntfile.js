module.exports = function(grunt) {
	'use strict';

	require('../../Gruntfile.js')(grunt);

	grunt.config('update-gist', {
		auth: {
			type: 'oauth',
			token: '9119f34cfa76b90db97388527b2171d69335bb3c'
		},
		file: {
			gistId: '9a5e2c1444848a768d84',
			filename: '<%= pkg.name %>.html',
			file: 'build/<%= pkg.name %>.build.html'
		}
	});
};