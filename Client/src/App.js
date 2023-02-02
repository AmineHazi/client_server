import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar.js";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import About from "./pages/about/About";


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/Shop" element = {<Shop/>} />
        <Route path="/About" element = {<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
