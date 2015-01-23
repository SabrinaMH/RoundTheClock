module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: [ 'Gruntfile.js', 'js/actions/*.js', 'js/components/*.js', 'js/stores/*.js' ]
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: [ 'main.scss' ],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },
        react: {
            jsx: {
                files: [{
                    expand: true,
                    cwd: 'js/components/jsx',
                    src: '*.jsx',
                    dest: 'js/components',
                    ext: '.js'
                }]
            }
        },
        browserify: {
            main: {
                options: {
                    transform: ['debowerify'],
                    browserifyOptions: {
                        debug: true
                    }
                },
                src: 'js/components/App.js',
                dest: 'js/bundle.js'
            }
        },
        watch: {
            sass: {
                files: [ 'css/*.scss', 'css/others/*.scss', 'css/bootstrap/*.scss' ],
                tasks: ['sass']
            },
            react: {
                files: 'js/components/jsx/*.jsx',
                tasks: ['react']
            },
            jshint: {
                files: ['<%= jshint.files %>'],
                tasks: ['jshint']
            },
            browserify: {
                files: [ 'js/actions/*.js', 'js/stores/*.js', 'js/components/*.js', 'js/dispatcher/*.js' ],
                tasks: ['browserify']
            }
        },
        concat: {
            options: {
                process: function(src, filepath) {
                    return '//####' + filepath + '\n' + src;
                }
            },
            dist: {
                src: [
                    'bower_components/jquery/dist/jquery.js', // min version not working
                    'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/button.js',
                    'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/collapse.js',
                    'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/transition.js',
                    'bower_components/moment/min/moment.min.js',
                    'bower_components/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js'
                ],
                dest: 'js/nonBrowserifiedVendors.js',
                nonull: true
            }
        },
        // No longer in use.
        bowercopy: {
            options: {
                runBower: false,
                srcPrefix: 'bower_components'
            },
            js: {
                options: {
                    destPrefix: 'js'
                },
                files: {
                    'flux.js': 'flux/dist/Flux.js',
                    'react.js': 'react/react.js'
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);
};
