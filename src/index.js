import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/styles/main.css";
import App from './App';
import * as serviceWorker from './serviceWorker';
import { I18nextProvider } from "react-i18next";
import i18n from "./services/i18n";

ReactDOM.render(<I18nextProvider i18n={i18n}>
                 <App />
                 </I18nextProvider>, document.getElementById('root'));

serviceWorker.unregister();
