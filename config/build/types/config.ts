export type TBuildMode = 'development' | 'production'

export type TPort = number;

export interface IBuildPaths {
    entry: string
    build: string
    html: string
    src: string
}

export interface IBuildEnv {
    mode: TBuildMode
    port: TPort
}

export interface IBuildOptions {
    mode: TBuildMode
    paths: IBuildPaths
    isDev: boolean
    port: TPort
}