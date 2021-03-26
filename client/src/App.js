import {Switch, Route  } from "react-router";

import Footer from './Components/Footer';
import Home from './Pages/Home';
import ContactList from './Pages/ContactList';
import Add from './Pages/Add';
import Errors from './Pages/Errors';
import Navba from "./Components/Navba";
import './App.css';

function App() {
  return (
    <div className="App">
       <Navba/>
       <Home/>
       <Switch>
        <Route exact path ="/" component={ContactList}/>
        <Route path={["/add", "/edit"]} component={Add} />
        <Route  path ="/*" component={Errors}/>
       </Switch>
        <Footer/>
    </div>
  );
}

export default App;
