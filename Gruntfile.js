module.exports = function(grunt) {
  grunt.initConfig({
    vulcanize: {
      default: {
        options: {},
        files: {
          'dist/index.html': 'src/index.html',
          'dist/blog.html': 'src/blog.html',
          'dist/post.html': 'src/post.html',
          'dist/author.html': 'src/author.html'
        },
      },
    }
  });

  grunt.loadNpmTasks('grunt-vulcanize');
}
