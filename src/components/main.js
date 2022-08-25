import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './home';
import Software from './software';
import Contact from "./contact";
import EquityResearch from "./equityResearch";
import TechnicalAnalysis from "./technicalAnalysis";



function Main() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="software" element={<Software />} />
      <Route path="EquityResearch" element={<EquityResearch />} />
      <Route path="TechnicalAnalysis" element={<TechnicalAnalysis />} />
      <Route path="Contact" element={<Contact />} />
    </Routes>
  );
}

export default Main;
