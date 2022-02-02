
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import HospitalServices from './pages/HospitalServices/HospitalServices';
import DoctorDetails from './pages/DoctorDetails/DoctorDetails';
import SingleService from './pages/SingleService/SingleService';
import NotFound from './pages/NotFound/NotFound';


function App() {
  return (
    <div >
      <AuthProvider>
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
            <PrivateRoute path="/hospitalservice">
              <HospitalServices></HospitalServices>
            </PrivateRoute>
            <PrivateRoute path="/doctordetails">
              <DoctorDetails></DoctorDetails>
            </PrivateRoute>
            <PrivateRoute path="/singleservice/:Name">
              <SingleService></SingleService>
            </PrivateRoute>
            <Route path='/*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>



    </div>
  );
}

export default App;
