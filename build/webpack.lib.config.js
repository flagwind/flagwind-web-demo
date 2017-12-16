const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

function resolve(dir)
{
    return path.join(__dirname, "..", dir);
}

module.exports =
{
    entry:
    {
        vue:
        [
            "vue",
            "vue-router",
            "vuex"
        ],
        flagwind:
        [
            "flagwind-core",
            "flagwind-web"
        ]
    },
    output:
    {
        path: resolve("static/lib"),

        filename: "[name].js",
        
        library: "[name]_library"
    },
    plugins:
    [
        new webpack.DllPlugin
        ({
            /**
             * 定义 manifest 文件生成的位置
             * [name]的部分由entry的名字替换
             */
            path: resolve("static/lib/[name].manifest.json"),

            /**
             * dll bundle 输出到那个全局变量上
             * 和 output.library 一样即可。 
             */
            name: "[name]_library"
        }),
        new UglifyJsPlugin
        ({
            uglifyOptions:
            {
                compress:
                {
                    warnings: false,
                    
                    drop_console: true
                }
            },
            sourceMap: false,
            parallel: true
        })
    ]
}