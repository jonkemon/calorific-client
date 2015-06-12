module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
                options: {
                    globals: {
                        jQuery: true
                    }
                }
        },
        uglify: {
            dist: {
                files: {
                    'dest/js/dependencies.js': [
                        'js/bower_components/angular/angular.js',
                        'js/bootstrap.js',
                        'js/skip-link-focus-fix.js',
                    ]
                }
            }
        },
        compass: {
            options: {
                sassDir: 'app/sass',
                cssDir: 'app/css',
                imagesDir: 'app/img',
                javascriptsDir: 'app/js',
                importPath: './bower_components'
            },
            dist: {},
        },
        watch: {
            files: ['sass/*', 'js/*'],
            tasks: ['jshint', 'uglify', 'compass']
        }
    });

    grunt.registerTask('build', ['jshint', 'uglify' ,'compass']);
    grunt.registerTask('default', ['build']);
};