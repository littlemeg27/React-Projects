import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Index from './Components/Index';
import { BrowserRouter as Router, Switch, Route }from'react-router-dom';
import Home from './Pages';
import index from './index';
import Indexx from './Pages/Indexx';
import About from './Pages/About';
import Goldens from './Pages/Goldens';
import Poodles from './Pages/Poodles';
import GoldenDoodles from './Pages/GoldenDoodles';
import TheFarm from './Pages/TheFarm';
import BusinessPlan from './Pages/BusinessPlan';
import Resourses from './Pages/Resourses';


  
function App() 
{
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/Indexx' exact component={Indexx} />
        <Route path='/About' component={About} />
        <Route path='/Goldens' component={Goldens} />
        <Route path='/Poodles' component={Poodles} />
        <Route path='/GoldenDoodles' component={GoldenDoodles} />
        <Route path='/TheFarm' component={TheFarm} />
        <Route path='/BusinessPlan' component={BusinessPlan} />
        <Route path='/Resourses' component={Resourses} />
      </Switch>
    </Router>
  );
}
  
export default App;
