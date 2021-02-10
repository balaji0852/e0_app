import React,{lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


const App = lazy(()=> {return import('./App')});

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>coming soon</div>}><App /></Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
