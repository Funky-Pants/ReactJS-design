import React from 'react';  
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/footer/Footer';

const Layout = props => {
  return (
    <>
      <Header></Header>
      <div className="container pt-3">
        {props.children}
        <hr></hr>
      </div>
      <Footer></Footer>
    </>
  )
}

function App() {
  return (
    <>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Layout>
                <Home/>
              </Layout>
            </Route>
          </Switch>
        </Router>
    </>
  );
}

export default App;
