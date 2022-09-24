import {lazy} from "react";

export const AboutLazyScreen = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => {
            // @ts-ignore
            return resolve(import('./AboutScreen').then(module => ({default: module.AboutScreen})));
        }, 1500)
    })
});