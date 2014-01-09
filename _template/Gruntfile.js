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
               dest: 'src/<%= pkg.name %>.min.js'
            }
         },
         wrapScriptTag: {
            src: 'src/<%= pkg.name %>.min.js',
            wrapInto : '<script type="text/javascript">\n',
            wrapOutro : '</script>',
            dest: 'build/<%= pkg.name %>.min.wrapped.v<%= pkg.version %>.js'
         },
         beautify: {
            src: 'build/<%= pkg.name %>.min.wrapped.v<%= pkg.version %>.js',
            symbolStart : '([',
            symbolEnd : '])',
            dest: 'build/<%= pkg.name %>.beautified.v<%= pkg.version %>.js'
         },
         deleteUglified: {
            src: 'src/<%= pkg.name %>.min.js',
         },
         deleteWrapped: {
            src: 'build/<%= pkg.name %>.min.wrapped.v<%= pkg.version %>.js'
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
         },
         publish: {
            default: {
               auth: {
                  type: 'oauth',
                  token: '9119f34cfa76b90db97388527b2171d69335bb3c'
               },
               file: {
                  gistId: '<%= pkg.homepage %>',
                  filename: '<%= pkg.name %>.js',
                  file: 'src/<%= pkg.name %>.js'
               }
            }
         }
   });

   // Load the plugins
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-jshint');

   grunt.registerTask('wrapScriptTag', 'wrapping...', function(){
            var fs = require('fs');

      // get content that wants to be wrapped
      var contentToWrap = fs.readFileSync(grunt.config('wrapScriptTag.src'),'utf8') + '\n';

      contentToWrap = grunt.config('wrapScriptTag.wrapInto') + '\t'+ contentToWrap + grunt.config('wrapScriptTag.wrapOutro');

      // save the file with the wrapped content
      fs.writeFileSync(grunt.config('wrapScriptTag.dest'), contentToWrap); 

      grunt.log.writeln('File "'+ grunt.config('wrapScriptTag.dest') +'" created.');

   });

   grunt.registerTask('beautify', 'beautify task', function(){
      var fs = require('fs');

      // get content that wants to be wrapped
      var script = fs.readFileSync(grunt.config('beautify.src'),'utf8') + '\n';

      var beautifulScript = script.replace(grunt.config('beautify.symbolStart'),grunt.config('beautify.symbolStart') + '\n\t\t');
      beautifulScript = beautifulScript.replace('\",\"','\",\n\t\t\"');
      beautifulScript = beautifulScript.replace(grunt.config('beautify.symbolEnd'),'\n\t' + grunt.config('beautify.symbolEnd'));


      // save the file with the wrapped content
      fs.writeFileSync(grunt.config('beautify.dest'), beautifulScript); 
      
      grunt.log.writeln('File "'+ grunt.config('beautify.dest') +'" created.');
   });

   grunt.registerTask('deleteUglified', 'deleting...', function(){
      var fs = require('fs');

      fs.unlinkSync(grunt.config('deleteUglified.src'));
   });

   grunt.registerTask('deleteWrapped', 'deleting...', function(){
      var fs = require('fs');

      fs.unlinkSync(grunt.config('deleteWrapped.src'));
   });

   grunt.registerMultiTask('publish', function() {
      var done = this.async();
      
      grunt.log.writeln('Getting GitHub API');
      var GitHubApi  = require("github");
      var github = new GitHubApi({
         version: '3.0.0',
         timeout: 5000
      });

      grunt.log.writeln('Trying to connect to GitHub.');
      github.authenticate(this.data.auth);

      var file = {};
      file[this.data.file.filename] = {
         "content": grunt.file.read(this.data.file.file),
      };
      grunt.log.writeln('Start updating the Gist.');
      github.gists.edit({
         id: this.data.file.gistId,
         files: file
      }, function(err, res) {
         grunt.log.writeln('Done!');
         done();
      });
   });

   // Default task(s).
   grunt.registerTask('default', ['jshint','uglify', 'wrapScriptTag', 'beautify', 'deleteUglified', 'deleteWrapped']);
   grunt.registerTask('wrap', ['uglify', 'wrapScriptTag', 'beautify', 'deleteUglified', 'deleteWrapped']);
   //grunt.registerTask('beautify', 'beautify');
   grunt.registerTask('deleteGeneratedFiles',['deleteUglified','deleteWrapped']);
   grunt.registerTask('publishScript', ['publish']);
};