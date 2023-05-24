import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from './redux/actions';
import { useEffect, useState } from 'react';
import { Route, useLocation } from 'react-router-dom';

//components
import { Home } from './components/Home';
import { LandingPage } from './components/LandingPage';
import { NavBar } from './components/NavBar';
import { About } from './components/About';
import { Detail } from './components/Detail';

function App() {

const dispatch = useDispatch();
const location = useLocation();


useEffect(() => {
  document.title = "PI-Pokemon";
  dispatch(getPokemons());
}, [dispatch]);

const pokemones = useSelector((state) => state.pokemon);


///Codigo para ocultar navBar en "/"
const [showNavbar, setShowNavbar] = useState(true);

useEffect(() => {
  if(location.pathname === "/") {
    setShowNavbar(false);
  }else{
    setShowNavbar(true)
  }
}, [location]);





  return (
    <div className="App">
    {showNavbar && <NavBar />}
    <Route exact path="/" component={LandingPage}/>
    <Route path="/home">
      <Home pokemones={pokemones}/>
    </Route>
    <Route path="/about" component={About}/>
    <Route path="/detail/:id" component={Detail} />
    </div>
  );
}

export default App;
