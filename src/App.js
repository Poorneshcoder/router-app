import About from './Pages/About';
import Home from './Pages/Home';
import UserDetails from './Pages/UserDetails';
import Skills from './Pages/Skills';
import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import NoPage from './Pages/NoPage';

function App() {
  // use history will help to navigate to the specific route
  const history = useHistory();
  return (
    <div className="App">
      <div>
        <button onClick={()=>history.goForward()}
        >
         - &gt;
        </button>
        <button onClick={()=>history.goBack()}
        >
          &lt;-
        </button>
      </div>
      
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
        <Route path="/user/:id/:name">
          <UserDetails />
        </Route>
        <Route path="**">
          <NoPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// step 1 : switch statement <switch></switch>
// step 2 : add routes <Router path= "/your path"> {your component} </Router>
// step 3 : add exact path
// step 4 : add 404 page <"**">
// step 5 : between  exact path and 404 path you should add your routes

// other functionality
// history hook => navigation to the diggerent path
// some ot the functionality of history is
// .push()
// .replace()
// .goForward()
// .goBack()

// Params functionality
// step 1 : pass the path with :id <paramaters>
// step 2 : get the id or parameters using useParam hook
// step 3 : const {id} = useParams();