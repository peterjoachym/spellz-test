import "./App.css";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import DinnerPage from "./pages/DinnerPage/DinnerPage";
import { UserDinnerContextProvider } from "./context/userDinnerContext";

function App() {
  return (
    <div className="App">
      <UserDinnerContextProvider>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/dinner" element={<DinnerPage />} />
        </Routes>
      </UserDinnerContextProvider>
    </div>
  );
}

export default App;
