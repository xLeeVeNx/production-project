import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {ProgressPlugin, WebpackPluginInstance} from "webpack";
import {IBuildOptions} from "./types/config";

export const buildPlugins = ({paths, port}: IBuildOptions): WebpackPluginInstance[] => {
    return [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: 'css/[name].[contenthash].css',
        })
    ]
};