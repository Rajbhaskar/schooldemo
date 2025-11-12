import "./index.css";
import Navbar from "./Components/Navbar.jsx";
import HomePage from "./Components/Pages/HomePage.jsx";
import AboutPage from "./Components/Pages/AboutPage.jsx";
import AcademicsPage from "./Components/Pages/AcademicsPage.jsx";
import DownloadsPage from "./Components/Pages/DownloadsPage.jsx";
import GalleryPage from "./Components/Pages/GalleryPage.jsx";
import EventsPage from "./Components/Pages/EventsPage.jsx";
import Footer from "./Components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* ✅ Navbar stays visible on all pages */}
      <Navbar />

      {/* ✅ Main content switches by route */}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/downloads" element={<DownloadsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/events" element={<EventsPage />} />

          {/* ✅ Optional 404 route */}
          <Route
            path="*"
            element={
              <div className="p-10 text-center text-2xl font-semibold">
                404 – Page Not Found
              </div>
            }
          />
        </Routes>
      </main>

      {/* ✅ Footer stays on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
