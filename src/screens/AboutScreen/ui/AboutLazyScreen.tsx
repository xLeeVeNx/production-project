import { lazy } from 'react';

export const AboutLazyScreen = lazy(async () => {
    return await new Promise(resolve => {
        setTimeout(() => {
            // @ts-expect-error
            return resolve(import('./AboutScreen').then(module => ({ default: module.AboutScreen })));
        }, 1500);
    });
});
