const { defineConfig } = require('@vue/cli-service')

const timeStamp = new Date().getTime()
module.exports = defineConfig({
  productionSourceMap: false, //去除vue打包后js目录下生成的.map文件，用于加速生产环境构建
  // publicPath:"./",  // apk 打包
  runtimeCompiler: true,
  transpileDependencies: true,
  lintOnSave: false,
  outputDir: 'deploy/html',
  chainWebpack(config) {
    config.plugin('html').tap((args) => { //标题
      args[0].title = 'captain'
      return args;
    })
  },
  configureWebpack: {
    output: {
      filename: `js/js[name].${timeStamp}.js`,
      chunkFilename: `js/chunk.[id].${timeStamp}.js`
    }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#0f9eda',
          },
          // 兼容 less-loader 3.x 
          math: 'always', 
          javascriptEnabled: true
        }
      }
    },
    extract: {
      filename: `css/[name].${timeStamp}.css`,
      chunkFilename: `css/chunk.[id].${timeStamp}.css`
    }
  }
})
