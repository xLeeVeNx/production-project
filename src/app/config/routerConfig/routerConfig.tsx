import { RouteProps } from 'react-router-dom';
import { MainScreen } from 'screens/MainScreen';
import { AboutScreen } from 'screens/AboutScreen';
import { NotFoundScreen } from 'screens/NotFoundScreen';

const enum EAppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'notFound',
}

const RoutesPaths: Record<EAppRoutes, string> = {
    [EAppRoutes.MAIN]: '/',
    [EAppRoutes.ABOUT]: '/about',
    [EAppRoutes.NOT_FOUND]: '*'
};

export const routesConfig: RouteProps[] = [
    {
        path: RoutesPaths.main,
        element: <MainScreen />
    },
    {
        path: RoutesPaths.about,
        element: <AboutScreen />
    },
    {
        path: RoutesPaths.notFound,
        element: <NotFoundScreen />
    }
];
