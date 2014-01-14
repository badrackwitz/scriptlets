module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				//banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'src/<%= pkg.name %>.js',
				dest: 'build/<%= pkg.name %>.min.js'
			}
		},
		wrapScriptTag: {
			src: 'build/<%= pkg.name %>.min.js',
			wrapInto: '<script type="text/javascript">\n',
			wrapOutro: '\n</script>',
			dest: 'build/<%= pkg.name %>.min.wrapped.html'
		},
		beautify: {
			src: 'build/<%= pkg.name %>.min.wrapped.html',
			symbolStart: '([',
			symbolEnd: '])',
			dest: 'build/<%= pkg.name %>.build.html'
		},
		watch: {
			scripts: {
				files: 'src/<%= pkg.name %>.js',
				tasks: ['default'],
					options: {
					event: ['changed'],
					spawn: false
				},
			},
		},
		jshint: {
			all: ['src/<%= pkg.name %>.js']
		}
	});

	// Load the plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	/**
	 * Wraps the src file with the configured characters and saves the result to the
	 * dest file.
	 */
	grunt.registerTask('wrapScriptTag', 'wrapping...', function(){
		var fs = require('fs');

		// get content that wants to be wrapped
		var contentToWrap = fs.readFileSync(grunt.config('wrapScriptTag.src'),'utf8');

		contentToWrap = grunt.config('wrapScriptTag.wrapInto') + '  ' + contentToWrap + grunt.config('wrapScriptTag.wrapOutro');

		// save the file with the wrapped content
		fs.writeFileSync(grunt.config('wrapScriptTag.dest'), contentToWrap); 

		grunt.log.writeln('File "'+ grunt.config('wrapScriptTag.dest') +'" created.');
	});

	/**
	 * Turns the minified and wrapped file into an readable
	 * scriptlet.
	 */
	grunt.registerTask('beautify', 'beautify task', function(){
		var fs = require('fs');

		// get content that wants to be wrapped
		var script = fs.readFileSync(grunt.config('beautify.src'),'utf8');

		var beautifulScript = script.replace(grunt.config('beautify.symbolStart'), grunt.config('beautify.symbolStart') + '\n    ');
		beautifulScript = beautifulScript.replace('\",\"', '\",\n    "');
		beautifulScript = beautifulScript.replace(grunt.config('beautify.symbolEnd'), '\n  ' + grunt.config('beautify.symbolEnd'));

		// save the file with the wrapped content
		fs.writeFileSync(grunt.config('beautify.dest'), beautifulScript); 

		grunt.log.writeln('File "'+ grunt.config('beautify.dest') +'" created.');
	});

	/**
	 * Publishes the beautified file to the configured Gist. With this task the
	 * wiki scriptlets can be automatically updated.
	 */
	grunt.registerTask('update-gist', function() {
		grunt.config.requires('update-gist.auth.type');
		grunt.config.requires('update-gist.auth.token');
		grunt.config.requires('update-gist.file.gistId');
		grunt.config.requires('update-gist.file.filename');
		grunt.config.requires('update-gist.file.file');

		var config = grunt.config('update-gist');

		var done = this.async();

		var GitHubApi  = require("github");
		var github = new GitHubApi({
			version: '3.0.0',
			timeout: 5000
		});

		grunt.log.writeln('Trying to connect to GitHub.');
		github.authenticate(config.auth);

		var file = {};
		file[config.file.filename] = {
			"content": grunt.file.read(config.file.file),
		};

		grunt.log.writeln('Start updating the Gist.');
		github.gists.edit({
			id: config.file.gistId,
			files: file
		}, function(err, res) {
			if(err) {
				grunt.log.error('Cannot update the Gist.');
				throw err;
			}
			else {
				grunt.log.writeln('Done!');
			}
			done();
		});
	});

	// Tasks
	grunt.registerTask('build', ['jshint', 'uglify', 'wrapScriptTag', 'beautify']);
	grunt.registerTask('publish', ['build', 'update-gist']);
	grunt.registerTask('default', ['build']);
};