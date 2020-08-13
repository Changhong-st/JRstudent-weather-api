module.exports = {
    apps: [
        {
            name: 'weather-server-app',
            script: './index.js',
            env_production: {
                NODE_ENV: 'production',
            }
        }
    ]
};