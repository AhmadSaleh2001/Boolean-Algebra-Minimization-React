import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MinTerm from "./components/MinTerm";
import Error from "./components/Error";
import BooleanFunction from "./components/BooleanFunction";
import "./BackEnd.css";

let App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<MinTerm />} />
          <Route path="/BooleanFunction" element={<BooleanFunction />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
};

export default App;
