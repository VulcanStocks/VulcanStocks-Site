import ReactDOM from "react-dom/client";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './home';
import Software from './software';



function Main() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="software" element={<Software />} />
    </Routes>
  );
}

export default Main;
