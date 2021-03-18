import Navbar  from './components/Navbar/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import SignUp from './pages/SignUp';
import Products from './pages/Products';
import Marketing from './pages/Marketing';
import Consulting from './pages/Consulting';

import './App.css'

function App() {
  return (
    <Router className='navbar-logo'>

      <Navbar />

      <Switch>

        <Route path='/' exact component={Home}/>
        <Route path='/services' component={Services}/>
        <Route path='/products' component={Products}/>
        <Route path='/contact-us' component={ContactUs}/>
        <Route path='/' component={SignUp}/>
        <Route path='/marketing' component={Marketing}/>
        <Route path='/consulting' component={Consulting}/>

      </Switch>
      
    </Router>    
  );
}

export default App;
