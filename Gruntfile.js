module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      release: {
        src: [
          'Gruntfile.js',
          'src/jquery.BlackAndWhite.js'
        ]
      }
    },
    copy: {
      release: {
        src: ['src/jquery.BlackAndWhite.js'],
        dest: 'jquery.BlackAndWhite.js'
      }
    },
    uglify: {
      options: {
        banner: '/** \n' +
          '* \n' +
          '* Version: <%= pkg.version %> \n' +
          '* Author:  Gianluca Guarini\n' +
          '* Contact: gianluca.guarini@gmail.com\n' +
          '* Website: http://www.gianlucaguarini.com\n' +
          '* Twitter: @gianlucaguarini\n' +
          '*\n' +
          '* Copyright (c) Gianluca Guarini\n' +
          '*/\n'
      },
      release: {
        files: {
          'src/jquery.BlackAndWhite.min.js': ['src/jquery.BlackAndWhite.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['jshint', 'uglify', 'copy']);
};