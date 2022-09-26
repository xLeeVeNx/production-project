import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routesConfig } from 'app/config/routerConfig/routerConfig';

export const AppRouter = () => {
    return (
        <Suspense fallback={<h1 style={{ padding: '20px' }}>Loading...</h1>}>
            <Routes>
                {
                    routesConfig.map(({ path, element }) => (
                        <Route key={path} path={path} element=
                            {
                                <div className="app-wrapper">{element}</div>
                            }
                        />
                    )
                    )
                }
            </Routes>
        </Suspense>
    );
};
