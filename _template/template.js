'use strict';

// Basic template description.
exports.description = 'basic development environment';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'This template tries to guess file and directory paths, but ' +
  'you will most likely need to edit the generated Gruntfile.js file before ' +
  'running grunt. _If you run grunt after generating the Gruntfile, and ' +
  'it exits with errors, edit the file!_';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = 'Gruntfile.js';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    // Prompt for these values.
    {
      name: 'author',
      message: 'Who is the author?',
      default: 'Gregor / Marius',
      warning: 'This changes the author parameter and maybe the responsibility for the created project.'
    },
    {
      name: 'uglify',
      message: 'Will files be minified?',
      default: 'Y/n',
      warning: 'Yes: min tasks. No: nothing to see here.'
    },
    {
      name: 'package_json',
      message: 'Will you have a package.json file?',
      default: 'Y/n',
      warning: 'This changes how filenames are determined and banners are generated.'
    }
  ], function(err, props) {
    props.author = /y/i.test(props.author);
    props.uglify = /y/i.test(props.uglify);
    props.package_json = /y/i.test(props.package_json);
    props.file_name = props.package_json ? '<%= pkg.name %>' : 'FILE_NAME';

    // Find the first `preferred` item existing in `arr`.
    function prefer(arr, preferred) {
      for (var i = 0; i < preferred.length; i++) {
        if (arr.indexOf(preferred[i]) !== -1) {
          return preferred[i];
        }
      }
      return preferred[0];
    }

    // Guess at some directories, if they exist.
    var dirs = grunt.file.expand({filter: 'isDirectory'}, '*').map(function(d) { return d.slice(0, -1); });
    props.lib_dir = prefer(dirs, ['lib', 'src', 'build']);
    //props.test_dir = prefer(dirs, ['test', 'tests', 'unit', 'spec']);

    // Maybe this should be extended to support more libraries. Patches welcome!
    //rops.jquery = grunt.file.expand({filter: 'isFile'}, '**/jquery*.js').length > 0;

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

		var exec = require("child_process").exec;
    exec('npm install', function(error, stdout, stderr) {
        if (error !== null) {
            console.log("Error: " + error);
        }
        done();
    });
    // If is package_json true, generate package.json
    if (props.package_json) {
      var devDependencies = {
        'grunt': '~0.4.2',
        'grunt-contrib-jshint': '~0.7.2',
        'grunt-contrib-watch': '~0.5.3'
      };

      if(props.author) var author =props.author; 

      if (props.uglify) {
        devDependencies['grunt-contrib-uglify'] = '~0.2.7';
      }

      // Generate package.json file, used by npm and grunt.
      init.writePackageJSON('package.json', {
        node_version: '>= 0.10.0',
        author:  author,
        devDependencies: devDependencies
      });
    }

    
  });

};

