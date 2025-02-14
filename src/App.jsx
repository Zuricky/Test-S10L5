import "./App.css";
import HomePage from "./components/HomePage";
import TopBar from "./components/TopBar";
import Weather from "./components/Weather";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <TopBar />
      <div className="flex-fill">
        <Routes>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/weather" element={<Weather />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
