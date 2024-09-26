module.exports = {
    apps: [
      {
        name: 'express-200',
        script: './node_modules/.bin/tsx',
        args: 'server.ts',
        watch: true,
        env_production: {
          NODE_ENV: 'production',
          PORT: 6879,
          // Add other environment variables here
        }
      }
    ]
  };
  