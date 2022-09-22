import Header from "./Main/Header";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from "./Main/Home";
import About from "./Main/About";
import Contact from "./Main/Contact";
import Projects from "./Main/Projects";
import Blog from "./Main/Blog";
import Mfooter from "./Main/Footer";

function App() {

  return (
   
      <div className="App">
         <Router>
        <Header/>
        <div className="content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Projects/*" element={<Projects/>}/>
          <Route path="/Blog" element={<Blog/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
        </div>
        <Mfooter/>
        </Router>
      </div>
    
  );
}

export default App;
