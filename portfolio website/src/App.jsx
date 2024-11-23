import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';
function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='App'>
 <NavBar/>
 <Banner/>
 <Skills/>
 <Projects/>
 <Footer/>
  </div>
  )
}

export default App
