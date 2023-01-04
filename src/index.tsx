import { render } from 'react-dom';
import { App } from './app/App';
import './app/styles/main.scss';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'shared/contexts';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root')
);
