import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from 'app/config';
import { counterReducer } from 'entities/Counter';

export const createReduxStore = (initialState: StateSchema) => {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer
        },
        devTools: __IS_DEV__,
        preloadedState: initialState
    });
};
