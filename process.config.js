module.exports = {
    apps: [
      {
        name: "GuardianCare-REACT",
        script: "yarn",
        args: "run start:prod",
        env: {
          NODE_ENV: "production",
        },
      },
    ],
  };