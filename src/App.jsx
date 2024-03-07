import Nav from "./components/Nav";
import Features from "./components/Features";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Models from "./pages/Models";
function App() {
  return (
    <HashRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<Models />} />
      </Routes>
      <Footer></Footer>
    </HashRouter>
  );
}

export default App;
