import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import RecentWorks from "./Components/Work";
import ContactForm from "./Components/ContactForm";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <RecentWorks />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
