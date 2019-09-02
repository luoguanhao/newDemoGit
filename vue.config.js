// vue.config.js or configure in the pagckage.json.
module.exports = {
    publicPath: './',//vue-cli3.3+新版本使用
    lintOnSave: true,   //lineOnSave: 'error' 将校验错误显示在浏览器里的浮层中
    assetsDir: 'static',
    pluginOptions: {
        vconsole: {enable: true /* others... */}
    },
    chainWebpack: config => {
        // config.rule('js').use('babel-loader')
        // config.entry.app = ['babel-polyfill',resolve('src/main.js')];
        // config.resolve.alias.set('@',resolve('src'))
        // if(process.env.NODE_ENV === 'production') { // 为生产环境修改配置
        //
        // } else {// 为开发环境修改配置...
        //
        // }

    },
    css: {
        // 启用 CSS modules
        modules: false,
        // 是否使用css分离插件
        extract: false,
        // 开启 CSS source maps，一般不建议开启
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            sass: {
                //设置css中引用文件的路径，引入通用使用的scss文件（如包含的@mixin）
                // data: `
                // $baseUrl: "/";
                // // @import '@/assets/scss/_common.scss';
                // `
            }
        },
    },
    devServer: {
        host: 'localhost',
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器  http://172.16.1.12:7071/rest/mcdPhoneBar/
        hotOnly: true, // 热更新
        // proxy: { //配置自动启动浏览器
        //     "/rest/*": {
        //         target: "http://172.16.1.12:7071",
        //         changeOrigin: true,
        //         // ws: true,//websocket支持
        //         secure: false
        //     },
        // }
        overlay: {
            warnings: false,
            errors: false
        }
    }

}