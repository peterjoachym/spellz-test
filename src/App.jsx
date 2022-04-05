import "./App.css";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import DinnerPage from "./pages/DinnerPage/DinnerPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/dinner" element={<DinnerPage />} />
      </Routes>
    </div>
  );
}

export default App;
