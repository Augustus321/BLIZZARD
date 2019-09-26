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
]