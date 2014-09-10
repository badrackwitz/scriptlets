module.exports = function(grunt) {
	'use strict';

	require('../../Gruntfile.js')(grunt);

	grunt.config(
	{
		'update-gist': {
			auth: {
				type: 'oauth',
				token: '9119f34cfa76b90db97388527b2171d69335bb3c'
			},
			file: {
				gistId: 'd14505c966bcb8175bc0',
				filename: '<%= pkg.name %>.html',
				file: 'build/<%= pkg.name %>.build.html'
			}
		}
	},
	{
		'wrapScriptTag': {
			src: 'build/<%= pkg.name %>.min.js',
			wrapInto: '<script type="text/javascript">\n',
			wrapOutro: '</script>',
			dest: 'build/<%= pkg.name %>.min.wrapped.html'
		},

	});

	// OBEREN CODE TESTEN!!
};