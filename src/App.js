import "./App.scss";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Navbar from "./Components/navbar";
import Home from "./Components/Home/Home";
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
