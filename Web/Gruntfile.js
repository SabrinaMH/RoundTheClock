module.exports = function(grunt){
	grunt.initConfig({
		jshint: {
			all: ['Gruntfile.js']
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
