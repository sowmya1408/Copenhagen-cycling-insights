import React from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent/HomeComponent';
import MapContainer from './containers/MapContainer';
import ChartsContainer from './containers/ChartsContainer';
import NavigationComponent from './components/NavigationComponent/NavigationComponent';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <NavigationComponent />
      <Switch>
      <Route exact path='/' component={HomeComponent}/>
      <Route path='/cycle-map' component={MapContainer}/>
      <Route path='/weather-timeChart/:latSlug/:longSlug' component={ChartsContainer}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
