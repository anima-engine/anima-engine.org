module.exports = function(grunt) {
  grunt.initConfig({
    vulcanize: {
      default: {
        options: {},
        files: {
          'dist/index.html': 'src/index.html',
          'dist/home.hbs': 'src/home.hbs',
          'dist/index.hbs': 'src/index.hbs',
          'dist/post.hbs': 'src/post.hbs',
          'dist/author.hbs': 'src/author.hbs'
        },
      },
    },

    copy: {
      assets: {
        expand: true,
        cwd: 'src/assets/',
        src: '**',
        dest: 'dist/assets/'
      },
      package: {
        expand: true,
        cwd: 'src/',
        src: 'package.json',
        dest: 'dist/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-vulcanize');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('generate', function() {
    grunt.task.run(
      'vulcanize',
      'copy:assets',
      'copy:package'
    );
  });
}
