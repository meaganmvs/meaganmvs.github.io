module.exports = function(grunt) {
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      concat: {
          options: {
            separator: ';'
        },
        dist: {
            src: ['app/**/*.js'],
            dest: 'dist/<%= pkg.name %>.js'
          }
      },
      uglify: {
        options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
          },
          dist: {
            files: {
              'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
            }
          }  
      },
      remove_usestrict: {
          dist: {
              files: [
                  {
                    expand: true,
                    cwd: 'public/app/js/',
                    dest: 'build/app/js/',
                    src: ['**/*.js']
              }
              ]
          }
      },
      buildcontrol: {
      options: {
        dir: 'dist',
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      },
      pages: {
        options: {
          remote: 'git@github.com:meaganmvs/meaganmvs.github.io.git',
          branch: 'gh-pages'
        }
      },
      local: {
        options: {
          remote: '../',
          branch: 'build'
        }
      }
    },

  });

grunt.loadNpmTasks('grunt-remove-usestrict');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-build-control');
grunt.registerTask('default', ['remove_usestrict', 'concat', 'uglify']);
grunt.registerTask('build', ['remove_usestrict', 'concat', 'uglify', 'buildcontrol']);


};