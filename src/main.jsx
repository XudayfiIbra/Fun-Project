import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import ServicesPage from "./pages/servicesPage";
import NotFound from "./pages/404Page";
const Main = () => {
  return (
    <div>
      <Router>
        <div>
            <h2 className="ml-3">navbar</h2>
            <Link to="/" className="underline text-blue-600 ml-3">Home</Link>
            <Link to="/about" className="underline text-blue-600 ml-3">about</Link>
            <Link to="/services" className="underline text-blue-600 ml-3">services</Link>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Main;
