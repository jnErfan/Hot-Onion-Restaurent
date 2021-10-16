import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './RedOnionRestaurent/Header/Header';
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';
import ScheduleNav from './RedOnionRestaurent/FoodZone/ScheduleNav/ScheduleNav';
import Breakfast from './RedOnionRestaurent/FoodZone/Breakfast/Breakfast';
import Dinner from './RedOnionRestaurent/FoodZone/Dinner/Dinner';
import Lunch from './RedOnionRestaurent/FoodZone/Lunch/Lunch';
import NotFound from './RedOnionRestaurent/NotFound/NotFound';
import Services from './RedOnionRestaurent/Services/Services';
import Footer from './RedOnionRestaurent/Footer/Footer';
import FoodDeatils from './RedOnionRestaurent/FoodZone/FoodDeatils/FoodDeatils';
import SignIn from './RedOnionRestaurent/SignIn/SignIn';
import Login from './RedOnionRestaurent/Login/Login';
import Shipping from './RedOnionRestaurent/Shipping/Shipping';
import ConfirmOrder from './RedOnionRestaurent/ConfirmOrder/ConfirmOrder';
import AuthContext from './Context/AuthContext';
import PrivateRoute from './PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
  <AuthContext>
      
  <Router>
            <Header/>
            <ScheduleNav/>
            <Switch>
                <Route exact path="/">
                    <Breakfast/>
                </Route>
                
                <Route path="/breakfast">
                    <Breakfast/>
                </Route>

                <Route path="/lunch">
                    <Lunch/>
                </Route>

                <Route path="/dinner">
                    <Dinner/>
                </Route>

                <Route path="/fooddetails">
                <FoodDeatils/>
                </Route>

                <Route path="/signin">
                <SignIn/>
                </Route>

                <Route path="/login">
                <Login/>
                </Route>

                <PrivateRoute path="/shipping">
                <Shipping/>
                </PrivateRoute>

                <PrivateRoute path="/confirmorder">
                <ConfirmOrder/>
                </PrivateRoute>
                
                <Route exact path="*">
                    <NotFound/>
                </Route>
            </Switch>
            <Services/>
            <Footer/>
        </Router>


  </AuthContext>
    </div>
  );
}

export default App;
