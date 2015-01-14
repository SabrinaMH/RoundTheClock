module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['Gruntfile.js', 'actions/*.js', 'components/js/*.js', 'stores/*.js' ]
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
                files: 'assets/styles/*.scss',
                tasks: ['sass']
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: 'assets/libs/!(all).js',
                dest: 'assets/libs/all.js',
                nonull: true
            }
        },
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
