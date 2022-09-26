import { RouteProps } from 'react-router-dom';
import { MainScreen } from 'screens/MainScreen';
import { AboutScreen } from 'screens/AboutScreen';

const enum EAppRoutes {
    main = 'main',
    about = 'about'
}

const RoutesPaths: Record<EAppRoutes, string> = {
    [EAppRoutes.main]: '/',
    [EAppRoutes.about]: '/about'
};

export const routesConfig: RouteProps[] = [
    {
        path: RoutesPaths.main,
        element: <MainScreen />
    },
    {
        path: RoutesPaths.about,
        element: <AboutScreen />
    }
];
