import './App.css';
import Heroes from './components/Heroes/Heroes';
import Header from './components/Header/Header';
import Navbar from './components/Menu/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Dropdown from './components/Menu/Dropdown/Dropdown';
import { useEffect, useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    }

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    }
  })

  return (
    <>
      <Navbar toggle={toggle}></Navbar>
      <Dropdown isOpen={isOpen} toggle={toggle}></Dropdown>
      <Header></Header>
      <Heroes></Heroes>
      <Footer></Footer>
    </>
  );
}

export default App;
