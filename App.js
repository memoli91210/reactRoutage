import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Parametre from "./Components/Parametre";
import Profile from "./Components/Profile";
import PagePrincipale from "./Components/PagePrincipale";
import NavBar from "./Components/NavBar";
import Contact from "./Components/Contact";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<PagePrincipale />} />
        <Route path="/parametre" element={<Parametre />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
<div className="App">
  <h1>Routage React</h1>
</div>;
