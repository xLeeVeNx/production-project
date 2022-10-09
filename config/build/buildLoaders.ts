import { RuleSetRule } from 'webpack';
import { IBuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export const buildLoaders = ({ isDev }: IBuildOptions): RuleSetRule[] => {
    // Если не используем тайпскирпт - нужен babel-loader для
    // браузерной поддержки (из нового js в старый) и компиляции jsx в js
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    };

    const babelLoader = {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: false,
                            saveMissing: true,
                            outputPath: 'public/locales/{{locale}}/{{ns}}.json'
                        }
                    ]
                ]
            }
        }
    };

    const svgLoader = buildSvgLoader();

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    };

    const cssLoader = buildCssLoader(isDev);

    return [
        svgLoader,
        fileLoader,
        babelLoader,
        typescriptLoader,
        cssLoader
    ];
};
