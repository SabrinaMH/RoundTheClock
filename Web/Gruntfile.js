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
				src: ['bower_components/flux/dist/Flux.js', 'bower_components/react/react.js'],
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
					'flux/Flux.js': 'flux/dist/Flux.js',
					'react/react.js': 'react/react.js'
				}
			}
		}
	});

	require('load-grunt-tasks')(grunt);
};
