module.exports = {
    apps: [
      {
        name: "GuardianCare-REACT",
        script: "start:prod", 
        args: "-s build",
        env: {
          NODE_ENV: "production",
        },
      },
    ],
  };