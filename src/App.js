import React, { Suspense, lazy }  from 'react';
import { Provider } from 'react-redux'; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import store from './core/redux/store';
import './assets/styles/App.scss';

import MainHeader from './components/layout/main-header/main-header';
import MainFooter from './components/layout/main-footer/main-footer';

const Home = lazy(() => import('./views/home/home'));
const Login = lazy(() => import('./views/login/login'));
const Categories = lazy(() => import('./views/categories/categories'));

function App() { 
  return (
    <Provider store={store}>     

      <Router>
        <div className="mainContainer">
          <MainHeader></MainHeader>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch> 
                <Route path="/login" exact component={Login}></Route>  
                <Route path="/dashboard" exact component={Home}></Route>
                <Route path="/categories" exact component={Categories}></Route>
              </Switch>
              </Suspense>
           {/*<MainFooter></MainFooter>*/}
        </div>
      </Router>
       
    </Provider>
  );
}

export default App;
