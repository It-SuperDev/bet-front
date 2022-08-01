import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import MuiThemeProvider from './theme';

const Root = createRoot(document.getElementById('app-root') as HTMLElement);

export {
    Root,
    reportWebVitals,
    MuiThemeProvider,
};