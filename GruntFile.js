module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
/* Currently not working right. Could be due to Grunt update. Will reviewlater
		watch: {
			files: '<%= jshint.src %>',
			tasks: ['jshint']
		},
*/
		mochaTest :{
			test: {
				options: {
					reporter: 'spec'
				},
				src: ['test/**/*.js']
			}
		},
		jshint: {
			// define the files to lint
			files: ['gruntfile.js', 'spike/**/*.js', 'src/**/*.js', 'test/**/*.js'],

			// configure JSHint (documented at http://www.jshint.com/docs/)
			options: {
				globals: {
					jQuery: true,
					console: true,
					module: true,
					curly: true,
					eqeqeq: true,
					immed: true,
					latedef: true,
					newcap: true,
					noarg: true,
					sub: true,
					undef: true,
					boss: true,
					eqnull: true,
					browser: true,
					globals: {
						require: true,
						define: true,
						requirejs: true,
						describe: true,
						expect: true,
						it: true
					}
				}
			}
		}
	});

// load plugins
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-mocha'); // for browser tests
grunt.loadNpmTasks('grunt-mocha-test'); // server-side tests
grunt.loadNpmTasks('grunt-blanket-mocha');
// Default Task(s)
grunt.registerTask('default', ['jshint','mochaTest']);
};