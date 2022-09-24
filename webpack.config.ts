import path from "path";
import webpack from 'webpack'
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {IBuildEnv, IBuildPaths, TBuildMode} from "./config/build/types/config";

export default (env: IBuildEnv): webpack.Configuration => {
    const paths: IBuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }

    const mode: TBuildMode = env.mode || 'development';
    const PORT = env.port || 3000;

    const isDev = mode === 'development';

    const config = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    })

    return config;
};