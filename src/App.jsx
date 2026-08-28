import Nav from "./components/Nav.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Ticker from "./components/Ticker.jsx";
import Hero from "./components/Hero.jsx";
import Intro from "./components/Intro.jsx";
import Timeline from "./components/Timeline.jsx";
import CategorySection from "./components/CategorySection.jsx";
import Lookbook from "./components/Lookbook.jsx";
import Accordion from "./components/Accordion.jsx";
import About from "./components/About.jsx";
import BigStatement from "./components/BigStatement.jsx";
import Visit from "./components/Visit.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import { CATEGORIES } from "./data/content.js";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <ScrollProgress />
      <WhatsAppButton />
      <Nav />
      <Ticker />
      <Hero />
      <Intro />

      <Timeline>
        <div id="collections">
          {CATEGORIES.map((category) => (
            <CategorySection key={category.index} {...category} />
          ))}
        </div>
      </Timeline>

      <Lookbook />
      <Accordion />
      <About />
      <BigStatement />
      <Visit />
      <Footer />
    </div>
  );
}
