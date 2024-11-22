import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='App'>
 <NavBar/>
 <Banner/>
  </div>
  )
}

export default App
