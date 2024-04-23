import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import ServicesPage from "./pages/servicesPage";
import NotFound from "./pages/404Page";
import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();
 
const Main = () => {
  const [username, setUsername] = useState("ALi");
  return (
    <>
      <AppContext.Provider value={{ username, setUsername }}>
        <div className="flex flex-col items-center justify-center">
          <Router>
            <div>
              <h2 className="ml-3">navbar</h2>
              <Link to="/" className="underline text-blue-600 ml-3">
                Home
              </Link>
              <Link to="/about" className="underline text-blue-600 ml-3">
                Profile
              </Link>
              <Link to="/services" className="underline text-blue-600 ml-3">
                services
              </Link>
            </div>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </div>
      </AppContext.Provider>
    </>
  );
};

export default Main;
