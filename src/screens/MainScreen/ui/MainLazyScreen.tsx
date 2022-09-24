import {lazy} from "react";

export const MainLazyScreen = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => {
            // @ts-ignore
            return resolve(import('./MainScreen').then(module => ({default: module.MainScreen})));
        }, 1500)
    })
});