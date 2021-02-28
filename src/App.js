import './App.css';
import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Beanies from './components/Beanies';
import FaceMasks from './components/FaceMasks';
import Gloves from './components/Gloves';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <div><Link to="/">Home</Link>{' '}
     <Link to="/beanies">Beanies</Link>{' '}
     <Link to="/gloves">Gloves</Link >{' '}
     <Link to="/facemasks">Face Masks</Link >{' '}
     <Switch><Route exact path="/" component={Home}/>
     <Route path = "/beanies" component={Beanies}/>
     <Route path = "/facemasks" component={FaceMasks}/>
     <Route path = "/gloves" component={Gloves}/>
     <Route path = "/home" component={Home}/>
     <Route render={() => <h1>Page not found</h1>}/>
     </Switch>
     </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
