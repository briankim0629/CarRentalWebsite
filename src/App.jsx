import Nav from "./components/Nav";
import Features from "./components/Features";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Models from "./pages/Models";
function App() {
  return (
    <Router>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/models" element = {<Models/>} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
