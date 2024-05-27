import { useState } from 'react';
import Navbar from './components/Navbar';
import { GiHamburgerMenu } from "react-icons/gi";
import './App.css';
import { Table } from './components/table'

const App = () => {

  const [ showNav, setShowNav ] = useState(false)

  return (
  <div className='App'>
    <header>
      <GiHamburgerMenu onClick={() => setShowNav(!showNav)}
      />
    </header>

    {showNav && <Navbar/>}
    <Table/>
  </div>
  )
}

export default App;
