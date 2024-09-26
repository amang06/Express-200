module.exports = {
    apps: [
      {
        name: 'express-200',
        script: 'server.ts',
        watch: true,
        interpreter: 'node',
        interpreter_args: '--experimental-modules',
        env_production: {
          NODE_ENV: 'production',
          PORT: 6879
        }
      }
    ]
  };
  