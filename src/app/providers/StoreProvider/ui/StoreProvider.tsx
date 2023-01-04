import React, { FC, ReactNode } from 'react';
import { createReduxStore, StateSchema } from 'app/config';
import { Provider } from 'react-redux';
import { DeepPartial } from 'redux';

interface StoreProviderProps {
    children: ReactNode;
    initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {
    const store = createReduxStore(initialState as StateSchema);

    return (
        <Provider store={store}>
            <>{children}</>
        </Provider>
    );
};
