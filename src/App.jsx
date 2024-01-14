import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";

const App = () => {
  return <div>

    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>

    <section id="About Me">
      <Parallax type="about"/>
    </section>
    <section>
      About Me
    </section>
    <section>
      Experiences
    </section>

    <section id="Portfolio">
      <Parallax type="portfolio"/>
    </section>
    <section>
      Portfolio 1
    </section>
    <section>
      Portfolio 2
    </section>
    <section>
      Portfolio 3
    </section>

    <section id="Contact">
      Contact
    </section>
  </div>;
};

export default App;
