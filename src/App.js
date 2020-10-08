import React from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent/HomeComponent';
import MapContainer from './containers/MapContainer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path='/' component={HomeComponent}/>
      <Route path='/cycle-map' component={MapContainer}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
