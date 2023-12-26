module.exports = {
    apps: [
      {
        name: 'Guardian_Care-React',
        script: 'serve',
        interpreter: 'bash',
        args: '-s build',
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };