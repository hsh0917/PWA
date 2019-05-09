import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import initWorkboxRefresh from '@loopmode/cra-workbox-refresh';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./sass/headings.scss";
import "./sass/styles.scss";

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

// serviceWorker.register({
//     onUpdate: registration => initWorkboxRefresh(registration, { render: renderRefreshUI })
// });

// function renderRefreshUI(registration, { refresh }) {
//     const el = document.createElement('div');
//     document.body.appendChild(el);

//     ReactDOM.render(<Main  onClick={refresh} />, document.getElementById(el));
// }

serviceWorker.register({
    onUpdate: registration => initWorkboxRefresh(registration, {
        textContent: 'A new version of this app is available. Click here!',
        className: 'btn btn-warning workbox-refresh animateOpen'
    })
});