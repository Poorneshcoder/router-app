import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Skills from './Pages/Skills';
import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';

function App() {
  // use history will help to navigate to the specific route
  const history = useHistory();
  return (
    <div className="App">
      
      <div className='nav-btn'>
        <button
          onClick={()=>history.push('/')}
        >
          Home
        </button>

        <button
          onClick={()=>history.push('/about')}
        >
          About
        </button>

        <button
          onClick={()=>history.push('/skills')}
        >
          Skills
        </button>

        <button
          onClick={()=>history.push('/contact')}
        >
          Contact
        </button>

      </div>
   
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
