import './App.css'
import Navbar from './navBar/Navbar'
import Slider from './imgSlider/Slider'
import Category from './category/Category'
import LoginPopup from './loginPopup/LoginPopup'
import { useEffect, useState } from 'react'
import Phones from './phones/Phones'
import BestSelling from './bestSelling/BestSelling'

function App() {

  const [loginPopup, setLoginPopup] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoginPopup(true)
    }, 4000)
  }, [])

  return (
    <div className='app'>
      {/* <Navbar></Navbar> */}

      {/* {loginPopup && <LoginPopup setLoginPopup={setLoginPopup} ></LoginPopup>} */}

      {/* <div style={{ padding: "12px" }}><Category ></Category></div> */}

      {/* <div style={{ padding: "12px" }}><Slider></Slider></div> */}

      {/* <Phones></Phones> */}

      <BestSelling></BestSelling>

    </div>
  )
}

export default App
