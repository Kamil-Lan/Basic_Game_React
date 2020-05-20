import React from 'react'; // ladowanie react do pliku js
import ReactDOM from 'react-dom'; // laduje biblioteke react dom
import './index.css'; // css laduje
import App from './App'; // laduje app.js
// import * as serviceWorker from './serviceWorker';
// wyswietla tresc na ekranie 
ReactDOM.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
