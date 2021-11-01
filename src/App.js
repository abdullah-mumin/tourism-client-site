import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Home/Header/Header';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Services/Services';
import Banner from './Pages/Home/Banner/Banner';
import Choose from './Pages/Choose/Choose';
import Footer from './Pages/Home/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import Award from './Pages/Award/Award';
import Contact from './Pages/Contact/Contact';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Order from './Pages/Order/Order';
import MyOrders from './Pages/MyOrders/MyOrders';
import NotFound from './Pages/NotFound/NotFound';
import AdminPanel from './Pages/AdminPanel/AdminPanel';

function App() {
  return (
    <div>
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
            <Route path="/banner">
              <Banner></Banner>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route exact path="/admin">
              <AdminPanel />
            </Route>
            <PrivateRoute path="/order/:id">
              <Order></Order>
            </PrivateRoute>
            <Route path="/myOrder">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/choose">
              <Choose></Choose>
            </Route>
            <Route path="/award">
              <Award></Award>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
