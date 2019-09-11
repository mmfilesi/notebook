import React from 'react';
import { Provider } from 'react-redux'; 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import store from './core/redux/store';
import './assets/styles/App.scss';


import Home from './views/home/home';

// const Home = React.lazy(() => import('./views/home/home'));


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={Home}></Route>
        
      </Router>
    </Provider>
  );
}

export default App;
