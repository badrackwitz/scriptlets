'use strict';

// Basic template description.
exports.description = 'basic development environment';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'This template tries to guess file and directory paths, but ' +
	'you will most likely need to edit the generated Gruntfile.js file before ' +
	'running grunt. _If you run grunt after generating the Gruntfile, and ' +
	'it exits with errors, edit the file!';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

	init.process({}, [
		// Prompt for these values.
		init.prompt('name'),
		init.prompt('description'),
		init.prompt('author_name'),
		{
			name : 'gistId',
			message: 'Enter the GistID (if it exists)'
		}

	], function(err, props) {
		var fs = require('fs');

		props.file_name = props.package_json ? '<%= pkg.name %>' : 'FILE_NAME';
		
		// Files to copy (and process)
		var files = init.filesToCopy(props);

		// Actually copy (and process) files.
		init.copyAndProcess(files, props);

		// delete temp files
		var tmpFiles = ['build/place.hold'];
		for(var key in tmpFiles) {
			var file = tmpFiles[key];
			if(fs.existsSync(file)) {
				fs.unlinkSync(file);
			}
		}

		// Generate package.json file, used by npm and grunt.
		var devDependencies = {
			'grunt': '~0.4.2',
			'grunt-contrib-jshint': '~0.7.2',
			'grunt-contrib-watch': '~0.5.3',
			'grunt-contrib-uglify': '~0.2.7',
			'github': '~0.1.12'
		};
		init.writePackageJSON('package.json', {
			name: props.name,
			description: props.description,
			
			devDependencies: devDependencies
		});

		// execute npm install
		var exec = require('child_process').exec;
		exec('npm install', function(err, stdout, stderr) {
			if(err) throw err;
			done();
		});

		// insert author specific auth token for gist and gist id
		var authTokens = {
			'Gregor Rackwitz': '9119f34cfa76b90db97388527b2171d69335bb3c',
			'Marius Naumann': '3f7a8e8ef291413da51393150fcf3a8a7f900edd'
		}
		var authToken = authTokens[props['author_name']] || '';
		var gruntFile = fs.readFileSync('Gruntfile.js', 'utf8');

		gruntFile = gruntFile.replace('__OAUTH_TOKEN__', authToken);
		gruntFile = gruntFile.replace('__GIST_ID__', props['gistId']);
		
		fs.writeFileSync('Gruntfile.js', gruntFile); 
	});
};

