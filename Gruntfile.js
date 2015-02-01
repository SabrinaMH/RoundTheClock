module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                ignores: [ 'js/bundle.js', 'js/nonBrowserifiableVendors.js' ],
                browserify: true,
                browser: true,
                devel: true
            },
            files: [ 'Gruntfile.js', 'js/**/*.js', '!js/app.js' ]
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
                    cwd: 'js/components',
                    src: ['*.jsx'],
                    dest: 'js/components/js',
                    ext: '.js'
                }]
            }
        },
        browserify: {
            bundle: {
                options: {
                    transform: ['debowerify'],
                    browserifyOptions: {
                        debug: true
                    }
                },
                src: 'js/app.js',
                dest: 'js/bundle.js'
            }
        },
        watch: {
            sass: {
                files: [ 'css/**/*.scss' ],
                tasks: ['sass']
            },
            react: {
                files: 'js/components/*.jsx',
                tasks: ['react']
            },
            jshint: {
                files: ['<%= jshint.files %>', '!js/bundle.js'],
                tasks: ['jshint']
            },
            browserify: {
                files: [ 'bower_components/**/*.js', 'js/**/*.js', '!js/bundle.js' ], // Ignore the file that browserify creates, as it otherwise loops
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
                    'bower_components/jquery/dist/jquery.js', // minified version not working
                    'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/button.js',
                    'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/collapse.js',
                    'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/transition.js',
                    'bower_components/moment/min/moment.min.js',
                    'bower_components/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js'
                ],
                dest: 'js/nonBrowserifiableVendors.js',
                nonull: true
            }
        }
    });

    require('load-grunt-tasks')(grunt);
};
