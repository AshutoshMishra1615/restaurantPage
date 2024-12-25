import { useState } from 'react'
import './App.css'
import Navbar from './component/navbar.jsx'
import Content from './component/content.jsx'
import Footer from './component/footer.jsx';


function App() {
  const [active, setActive] = useState("home");

  const handleClick = (section) => {
    setActive(section);
  };
  return (
    <>
    <Navbar active={active} handleClick={handleClick}/>
    <Content active={active} handleClick={handleClick}/>
    <Footer/>
    </>
  )
}

export default App
