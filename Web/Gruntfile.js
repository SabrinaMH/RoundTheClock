module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: [ 'Gruntfile.js', 'actions/*.js', 'components/js/*.js', 'stores/*.js' ]
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'assets/styles',
                    src: [ 'main.scss' ],
                    dest: 'assets/styles',
                    ext: '.css'
                }]
            }
        },
        react: {
            jsx: {
                files: [{
                    expand: true,
                    cwd: 'components',
                    src: '*.jsx',
                    dest: 'components/js',
                    ext: '.js'
                }]
            }
        },
        watch: {
            react: {
                files: 'components/*.jsx',
                tasks: ['react']
            },
            sass: {
                files: [ 'assets/styles/*.scss', 'assets/styles/bootstrap/*.scss' ],
                tasks: ['sass']
            },
            jshint: {
                files: ['<%= jshint.files %>'],
                tasks: ['jshint']
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'bower_components/jquery/dist/jquery.js', // important to list first due to dependencies
                    'bower_components/react/react.js',
                    'bower_components/reflux/dist/reflux.js',
                    'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/button.js',
                    'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/collapse.js',
                    'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/transition.js',
                    'bower_components/moment/min/moment.min.js',
                    'bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
                ],
                dest: 'assets/js/all.js',
                nonull: true
            }
        },
        // No longer in use. Concat the files into all.js from their original folder.
        bowercopy: {
            options: {
                runBower: false,
                srcPrefix: 'bower_components'
            },
            js: {
                options: {
                    destPrefix: 'assets/js'
                },
                files: {
                    'reflux.js': 'reflux/dist/reflux.js',
                    'react.js': 'react/react.js'
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);
};
