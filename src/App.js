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


function App() {
  return (
    <div className="App">
  
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
                <Route exact path="*">
                    <NotFound/>
                </Route>
            </Switch>
            <Services/>
            <Footer/>
        </Router>


    </div>
  );
}

export default App;
