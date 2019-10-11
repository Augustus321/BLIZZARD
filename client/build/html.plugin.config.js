const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = [
    new HtmlWebpackPlugin({
        template:"./src/index.html",
        filename:"index.html",
        chunks:["main"]
    }),
    new HtmlWebpackPlugin({
        template:"./src/pages/Warcraft.html",
        filename:"static/pages/Warcraft.html",
        chunks:["Warcraft"]
    }),
    new HtmlWebpackPlugin({
        template:"./src/pages/StarCraft.html",
        filename:"static/pages/StarCraft.html",
        chunks:["StarCraft"]
    }),
    new HtmlWebpackPlugin({
        template:"./src/pages/loginRegister.html",
        filename:"static/pages/loginRegister.html",
        chunks:["loginRegister"]
    }),
    new HtmlWebpackPlugin({
        template:"./src/pages/Overwatch.html",
        filename:"static/pages/Overwatch.html",
        chunks:["Overwatch"]
    }),
    new HtmlWebpackPlugin({
        template:"./src/pages/store.html",
        filename:"static/pages/store.html",
        chunks:["store"]
    }),
    new HtmlWebpackPlugin({
        template:"./src/pages/news.html",
        filename:"static/pages/news.html",
        chunks:["news"]
    }),
]