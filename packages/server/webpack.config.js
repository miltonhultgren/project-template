const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
    mode: 'development',
    target: 'node',
    plugins: [
        new NodemonPlugin(),
    ],
    ignoreWarnings: [
        {
            module: /knex\/lib\/migrations/,
            message: /the request of a dependency is an expression/,
        },
        {
            module: /express\/lib\/view/,
            message: /the request of a dependency is an expression/,
        }
    ],
    externals: {
        cardinal: 'cardinal',
        tedious: 'tedious',
        sqlite3: 'sqlite3',
        'better-sqlite3': 'better-sqlite3',
        pg: 'pg',
        'pg-query-stream': 'pg-query-stream',
        mysql: 'mysql',
        oracledb: 'oracledb',
    }
};