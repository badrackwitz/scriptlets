'use strict';

// Basic template description.
exports.description = 'basic development environment';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'This template tries to guess file and directory paths, but ' +
  'you will most likely need to edit the generated Gruntfile.js file before ' +
  'running grunt. _If you run grunt after generating the Gruntfile, and ' +
  'it exits with errors, edit the file!_';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    // Prompt for these values.

    init.prompt('name'),
    init.prompt('description'),
    {
      name : 'gist_ID',
      message: 'Enter the GistID (if it exists)'
    }

    
  ], function(err, props) {
    props.file_name = props.package_json ? '<%= pkg.name %>' : 'FILE_NAME';
    grunt.log.writeln(props.gist_ID);
    // Files to copy (and process)
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // execute npm install
		var exec = require("child_process").exec;
    exec('npm install', function(error, stdout, stderr) {
        if (error !== null) {
            console.log("Error: " + error);
        }
        done();
    });

      var devDependencies = {
        'grunt': '~0.4.2',
        'grunt-contrib-jshint': '~0.7.2',
        'grunt-contrib-watch': '~0.5.3',
        'grunt-contrib-uglify': '~0.2.7',
        "github": "~0.1.12"
      };

      // Generate package.json file, used by npm and grunt.
      init.writePackageJSON('package.json', {
        name: props.name,
        homepage : props.gist_ID,
        description:  props.description,
        
        devDependencies: devDependencies
      });

      // use gist_ID and include it in an own gruntfile if possible
      // create pointer to general gruntfile if possible

  });
};

