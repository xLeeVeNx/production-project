import React, {Suspense} from 'react';
import './styles/main.scss'
import {Link, Route, Routes} from "react-router-dom";
import {MainScreen} from "screens/MainScreen";
import {AboutScreen} from "screens/AboutScreen";
import {classNames} from "shared";
import {useTheme} from "shared/contexts";

const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Routes>
                    <Route path="/" element={<MainScreen />} />
                    <Route path="/about" element={<AboutScreen />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;