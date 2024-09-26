module.exports = {
    apps: [
      {
        name: 'express-200',
        script: 'node_modules/.bin/tsx',
        args: 'server.ts',
        watch: true,
        interpreter: 'node',
        env_production: {
          NODE_ENV: 'production',
          PORT: 6879
        }
      }
    ]
  };
  