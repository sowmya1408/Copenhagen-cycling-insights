import React from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent/HomeComponent';
import MapContainer from './containers/MapContainer';
import GraphContainer from './containers/GraphContainer';
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
      <Route path='/weather-graphs/:longSlug/:latSlug' component={GraphContainer}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
