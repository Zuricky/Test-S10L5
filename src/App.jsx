import "./App.css";
import HomePage from "./components/HomePage";
import TopBar from "./components/TopBar";
import Weather from "./components/Weather";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import { Route, Router, Routes } from "react-router";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column">
        <TopBar />
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/weather" element={<Weather />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
