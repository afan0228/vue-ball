let path=require('path');
module.exports={
    publicPath:process.env.NODE_ENV==='production'?'http://www.anyingfan.com':'/',
    assetsDir:'asserts',
    outputDir:'./my-dist',
    runtimeCompiler:false,//使用模板方式  一般不使用
    productionSourceMap:false,//打包不再使用sourceMap
    chainWebpack:config=>{
        //可以获取到webpack的配置再增加一些自己的逻辑
        //配置目录别名为+
        config.resolve.alias.set('+',path.resolve(__dirname,'src'));
    },
    configureWebpack:{
        plugins:[],
        module:{
        }
    },
    devServer:{
        proxy:{
            '/api/getUser':{
                target:'http://localhost:3000',//当请求localhost"8080时
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            }
        }
    },
    pluginOptions:{
        'style-resources-loader':{
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname,'src/assets/common.less')
            ]
        }
    }
    

}
