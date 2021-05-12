import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppNavbar from './components/AppNavbar';
import Home from './components/views/Home';
import About from './components/views/About';
import DeployScreen from './components/views/DeployScreen';
import { Nominee } from './components/participants/Nominee';
import { Voter } from './components/participants/Voter';
import { Admin } from './components/participants/Admin';

const App = () => {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/deploy" component={DeployScreen} />
          <Route path="/app/Nominee" component={Nominee} />
          <Route path="/app/Voter" component={Voter} />
          <Route path="/app/Admin" component={Admin} />
{/*  <Route path="/test" component={AcceptWager} />*/}          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
