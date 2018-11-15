import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
// import CoursesPage from './components/course/CoursesPage';
import AddOrder from './components/order/AddOrder';
// import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default
import AboutPage from './components/about/AboutPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
     <Route path="addorder" component={AddOrder}/>
   
    <Route path="about" component={AboutPage}/>
  </Route>
);
