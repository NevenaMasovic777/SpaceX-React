import React from 'react';
import Header from './header';
import Footer from './footer';
import PastLList from '../components/past-l-list';
import FutureLList from '../components/future-l-list';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'




const Content = () => {


    return (
      <>
        <Header/>
        <Router>
          <div className='links'>
            <p><Link to={"/"}>Past Launches</Link></p>
            <p><Link to={"/future"}>Future Launches</Link></p>
          </div>

          <Switch>
            <Route exact path="/" component={PastLList}></Route>
            <Route exact path="/future" component={FutureLList}></Route>
          </Switch>
        </Router>
        <Footer/>
      </>
    );
}

export default Content