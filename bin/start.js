process.env.CHINER_NODE_ENV = 'development';
var path = require('path');
var childProcess = require('child_process');
var webpack = require('webpack');
var config = require('../config/webpack.dev.config.js');
var profile = require('../profile');
var host = profile.host;
var port = profile.port;
var protocol = profile.protocol;
var WebpackDevServer = require('webpack-dev-server');
const {createProxyMiddleware} = require("http-proxy-middleware");

config.entry.app.unshift(`webpack-dev-server/client?${protocol}://${host}:${port}/`);

var compiler = webpack(config);

var devServer = new WebpackDevServer(compiler, {
    stats: { colors: true },
    contentBase: path.resolve(__dirname, '../public'),
    proxy:{
        '/jres_api':{
            target: 'http://198.60.1.1:18089',
            changeOrigin: true,
            pathRewrite: {
                '^/jres_api': '/'
            }
        },
        '/test_api':{
            target: 'http://192.168.69.213:5000',
            changeOrigin: true,
            pathRewrite: {
                '^/test_api': '/'
            }
        }
    }
});

devServer.listen(port, host, function () {
    // 启动electron
    childProcess.spawn('npm', ['run', 'electron'], { shell: true, env: process.env, stdio: 'inherit' })
      .on('close', code => process.exit(code))
      .on('error', spawnError => console.error(spawnError));
});
