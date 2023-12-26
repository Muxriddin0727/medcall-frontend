module.exports = {
    apps: [
      {
        name: 'Guardian_Care-React',
        script: 'serve',
        args: '-s build',
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };