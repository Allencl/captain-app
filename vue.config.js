const { defineConfig } = require('@vue/cli-service')

const timeStamp = new Date().getTime()

module.exports = defineConfig({
  publicPath:"./",  // apk 打包
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    // https:true,  // https
    proxy: {
      '': {
        // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/d

        // target: 'http://124.222.198.109:18188/stage-api/',  // 服务器
        // target: 'https://ism.sinoboom.com.cn/prod-api/',  // 正式环境

        // target: 'http://192.168.0.116:10001/',   // 老左

        

        target: 'http://124.222.198.109:18188/stage-api/',   // 老左
        // target: 'http://192.168.0.103:10001/',   // 徐建斌
        // target: 'http://172.16.21.81:10001/',   // 成才

        


        // target:process.env.VUE_APP_SERVER_API_BASE,
        // 允许跨域
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/': '/'
          // '^/stage-api': '/dev-api'
          // '^/stage-api': '/'
        }
      },
    }
  },
  chainWebpack(config) {
    config.plugin('html').tap((args) => { 
      args[0].title = 'captain'
      return args;
    })
  },
  configureWebpack:{
    output: {
      filename: `js/js[name].${timeStamp}.js`,
      chunkFilename: `js/chunk.[id].${timeStamp}.js`,
    }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
    extract: {
      filename: `css/[name].${timeStamp}.css`,
      chunkFilename: `css/chunk.[id].${timeStamp}.css`,
    }
  }
})
