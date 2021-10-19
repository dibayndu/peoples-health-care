
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';

import Booking from './Pages/Booking/Booking/Booking';
import Footer from './Pages/Footer/Footer';
import Expert from './Pages/Home/Expert/Expert';
import Experts from './Pages/Home/Experts/Experts';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
      <Header></Header>
    <Switch>
<Route exact path="/">
<Home></Home>
</Route>
<Route path="/home">
  <Home></Home>
</Route>
<Route path="/services">
  <Services></Services>
</Route>
<Route path="/experts">
  <Experts></Experts>
</Route>
<Route path="/login">
  <Login></Login>
</Route>
<PrivateRoute path="/Booking/:serviceId">
  <Booking></Booking>
  </PrivateRoute>
<Route path="*">
  <NotFound></NotFound>
</Route>
    </Switch>
    </Router>
    </AuthProvider>
    
    <Footer></Footer>
    </div>
    
  );
}

export default App;



//https://people-s-health-care.web.app/