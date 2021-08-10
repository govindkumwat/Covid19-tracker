import './App.css';
import { Posts } from './components/posts'
import { Navbar } from './components/Navbar'
import {Searchbar} from './components/Searchbar'
import {Footer} from './components/Footer'
import {BrowserRouter,  Route, Switch } from "react-router-dom";
import {Add} from './components/Add'

import CountryApp from './components/DatabyCountry/CountryApp.js'
function App() {
  return (
    <div>
      <BrowserRouter>
          
      <Navbar/>
      <Switch>
        <Route exact path='/'>
      <Posts/>
      </Route>

      <Route exact path='/add'>
      <Add/>
      </Route>

      <Route exact path='/country'>
        <CountryApp/>
      </Route>


      </Switch>

      </BrowserRouter>
      
  
      <Footer/>

    

     
      
     
    </div>
  );
}

export default App;
