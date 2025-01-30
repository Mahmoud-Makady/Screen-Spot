import logo from './assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import NavBar from './components/Navbar/navbar';
import Movies from './pages/Movies/Movies';
import MovieDetail from './pages/MovieDetail';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import "bootstrap-icons/font/bootstrap-icons.css";
import Fav from './pages/Fav';
import { useEffect, useState } from 'react';
import { ContextLang } from './Context/ContextLang';

function App() {

  const [contextLang, setContextLang] = useState('En');
  useEffect(() => {
    document.documentElement.dir = contextLang === 'Ar' ? 'rtl' : 'ltr';
  }, [contextLang]);
  return (
    <>
      <ContextLang.Provider value={{contextLang, setContextLang}}>
    <BrowserRouter>
    <NavBar/>
        <Switch>
          <Route path={"/"} component={Home} exact /> 
          <Route path={"/Home"} component={Home} exact /> 
          <Route path={"/movies"} component={Movies} exact /> 
          <Route path={"/movie/:id"} component={MovieDetail} exact /> 
          <Route path={"/login"} component={Login} exact /> 
          <Route path={"/register"} component={Register} exact /> 
          <Route path={"/Favourites"} component={Fav} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer/>
      </BrowserRouter>
      </ContextLang.Provider>
    </>
    
  );
}

export default App;
