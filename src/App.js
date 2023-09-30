import './App.css';
import About from './components/about/about';
import Certificates from './components/certificates/Certificates';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Qualification from './components/qualifications/Qualification';
import Skills from './components/skills/Skills';

const App = () => {
  return (

    <>
    <Header/>
    <main className='main'>
        <Home />
        <About />
        <Skills/>
        <Qualification/>
        <Certificates/>
        <Contact/>
    </main>
    </>
   
  )
}

export default App;
