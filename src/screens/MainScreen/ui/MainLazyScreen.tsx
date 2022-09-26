import { lazy } from 'react';

export const MainLazyScreen = lazy(async () => {
    return await new Promise(resolve => {
        setTimeout(() => {
            // @ts-expect-error
            return resolve(import('./MainScreen').then(module => ({ default: module.MainScreen })));
        }, 1500);
    });
});
