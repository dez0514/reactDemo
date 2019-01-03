import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Root from './router/index';
import './styles/reset.scss';
import './utils/rem.js'
import 'swiper/dist/css/swiper.min.css'
import 'antd-mobile/dist/antd-mobile.css'; 
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Root />
    </BrowserRouter>, 
    document.getElementById('root')
);
registerServiceWorker();
