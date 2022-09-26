import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { DefinePlugin, HotModuleReplacementPlugin, ProgressPlugin, WebpackPluginInstance } from 'webpack';
import { IBuildOptions } from './types/config';

export const buildPlugins = ({ paths, port, isDev }: IBuildOptions): WebpackPluginInstance[] => {
    return [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: 'css/[name].[contenthash].css'
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),
        new HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin()
    ];
};
