import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import RecentWorks from "./Components/Work";
import ContactForm from "./Components/ContactForm";
import Features from "./Components/Features";
import { Testimonials } from "./Components/Testimonials";

function MainContent() {
  const location = useLocation();
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    if (location.pathname === "/") {
      setShowAll(true);
    } else {
      setShowAll(false);
    }
  }, [location.pathname]);

  return (
    <>
      {showAll ? (
        <>
          <Hero />
          <About />
          <Services />

          <RecentWorks />
          <Testimonials />
          <ContactForm />
        </>
      ) : (
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonal" element={<Testimonials />} />
          <Route path="/works" element={<RecentWorks />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <div className="mt-15">
        {" "}
        {/* Spacer for fixed header */}
        <MainContent />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
