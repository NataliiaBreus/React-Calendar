import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import UserLoader from './components/UserLoader';
import WindowSizes from './components/WindowSizes';
import Header from './components/Header';

const usersDB = [
  {
    id: 1,
    firstname: 'John',
    lastname: 'Smith',
  },
  {
    id: 2,
    firstname: 'Bob',
    lastname: 'Brown',
  },
  {
    id: 3,
    firstname: 'Sara',
    lastname: 'Smith',
  },
  {
    id: 4,
    firstname: 'Mary',
    lastname: 'Black',
  },
];

//react router dom

function App (props) {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/contacts'>
          <Contacts />
        </Route>

        <Route path='/about' component={About} />

        

        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

const Home = () => <div>HOME</div>;
const About = props => {
  console.log('ABOUT: ', props);

  setTimeout(() => {
    props.history.push('/');
  }, 5000);

  return <div>About</div>;
};
const Contacts = props => {
  console.log('CONTACTS:', props);
  return <div>Contacts</div>;
};

const NotFound = () => <div>Error 404. Page not found</div>;

export default App;
