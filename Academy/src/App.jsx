import Header from "./components/Header/Header";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Program from "./components/Program/Program";
import Tittle from "./components/Tittle/Tittle";
import About from "./components/About/About";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <Tittle subTitle="Nosso programa" title="O que oferecemos" />
        <Program />
      </div>
      <div className="container">
        <About />
        <Tittle subTitle="nos mande um e-mail" title="Mantenha contato" />
        <Contact />
      </div>
    </>
  );
}

export default App;
