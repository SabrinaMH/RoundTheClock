module.exports = function(grunt){
	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		jshint: {
			all: ['Gruntfile.js', 'actions/*.js', 'components/js/*.js', 'stores/*.js' ]
		},
		react: {
            jsx: {
                files: [
                    {
                        expand: true,
                        cwd: 'components',
                        src: [ '*.jsx' ],
                        dest: 'components/js',
                        ext: '.js'
                    }
                ]
            }
        },
        watch: {
            react: {
                files: 'components/*.jsx',
                tasks: ['react']
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
			assets: {
				options: {
					destPrefix: 'assets/libs',		
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
