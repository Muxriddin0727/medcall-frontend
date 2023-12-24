module.exports = {
    apps: [
      {
        name: "GuardianCare-REACT",
        script: "node_modules/serve/bin/serve.js", 
        args: "-s build",
        env: {
          NODE_ENV: "production",
        },
      },
    ],
  };