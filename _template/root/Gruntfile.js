module.exports = function(grunt) {
    'use strict';

    require('../../_template/Gruntfile.js')(grunt);
    var publishConfig = {
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
    };

    grunt.config('publish',publishConfig);
};