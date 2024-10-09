import './App.css';
import Contact from './Components/Contact';
import Journey from './Components/Journey';
import MyHero from './Components/MyHero';
import Navbar from './Components/Navbar';
import Parallax from './Components/Parallax';
import Portfolio from './Components/Portfolio';



function App() {
  return (
    <div>
      <section id="Homepage"><Navbar/>
      <MyHero/>
      </section>
      <section id="Journey"><Parallax type="services"/></section>
      <section><Journey/></section>
      <section id="Portfolio"><Parallax type="portflio"/></section>
      <Portfolio />
      <section id="Contact">
        <Contact/>
      </section>
    </div>
  );
}

export default App;
 