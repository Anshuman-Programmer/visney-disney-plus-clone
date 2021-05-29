import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from "./components/Login.js"
import Header from "./components/Header"
import './App.css';
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="app">
      <Router>
        

        <Switch>
          <Route exact path="/">
            <Header avaterNo={true}/>
            <Login/>
          </Route>
          <Route path="/home">
            <Header avaterNo={true}/>
            
            <Home/>

          </Route>

          <Route exact path="/detail/:id">
            <Header avaterNo={false}/>

            <Detail />
          
          </Route>

          

        </Switch>

      </Router>
    </div>
  );
}

export default App;
