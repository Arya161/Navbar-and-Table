import { useState } from 'react';
import Navbar from './components/Navbar';
import { GiHamburgerMenu } from "react-icons/gi";
import './App.css';
import { Muitable } from './components/muitable';

const App = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className='App'>
      <header>
        <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
      </header>

      {showNav && <Navbar />}
      <Muitable/>
    </div>
  );
}

export default App;