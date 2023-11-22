// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import About from "./About";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";

function App() {
  //location and path name
  // const location =window.location.pathname;
  // console.log(location);
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}>
          </Route>
          <Route exact path ='/About' element ={<About/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
