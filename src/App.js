import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="pages">
        <Routes>
          <Route
            path='/'
            element = {<Home />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
