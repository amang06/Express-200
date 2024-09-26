module.exports = {
    apps: [
      {
        name: 'express-200',
        script: 'server.ts',
        watch: true,
        interpreter: './node_modules/.bin/tsx',
        env_production: {
          NODE_ENV: 'production',
          PORT: 6879
        }
      }
    ]
  };
  