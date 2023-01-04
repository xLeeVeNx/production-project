import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routesConfig } from 'app/config/routesConfig/routesConfig';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

export const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {
                    routesConfig.map(({ path, element }) => (
                        <Route key={path} path={path} element=
                            {
                                <div className="appWrapper">{element}</div>
                            }
                        />
                    )
                    )
                }
            </Routes>
        </Suspense>
    );
};
