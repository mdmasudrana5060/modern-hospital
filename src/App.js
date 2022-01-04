
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>

          </Route>
          <Route path="/home">
            <Home></Home>

          </Route>
          <Route path="/about">
            <About></About>

          </Route>
          <Route path="/contact">
            <Contact></Contact>

          </Route>
          <Route path="/register">
            <Register></Register>

          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>

        </Switch>
        <Footer></Footer>
      </BrowserRouter>


    </div>
  );
}

export default App;
