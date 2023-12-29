import './App.css'
import Navbar from './navBar/Navbar'
import Slider from './imgSlider/Slider'
import Category from './category/Category'
import LoginPopup from './loginPopup/LoginPopup'
import { useEffect, useState } from 'react'
import Phones from './phones/Phones'
import BestSelling from './bestSelling/BestSelling'
import Footer from './footer/Footer'
import Signin from './navBar/signin/Signin'
import Demo from './demo/Demo'


function App() {

  const [signig, setSignin] = useState(true)

  const [loginPopup, setLoginPopup] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoginPopup(true)
    }, 4000)
  }, [])

  const [theme, setTheme] = useState("Light")

  const changeTheme = () => {
    setTheme(theme === 'Light' ? 'Dark' : 'Light')
  }

  return (
    <div className='app' style={{ backgroundColor: (theme === 'Light' ? 'whitesmoke' : 'black') }}>

      <Navbar setTheme={setTheme} theme={theme} changeTheme={changeTheme} setLoginPopup={setLoginPopup}></Navbar>
      {/* {loginPopup && <LoginPopup setLoginPopup={setLoginPopup} ></LoginPopup>} */}

      {/* {signig && <Signin setSignin={setSignin}></Signin>} */}

      <div className='landingPage'>
        <Category ></Category>

        {/* <Slider></Slider> */}

        {/* <BestSelling ></BestSelling> */}
      </div>

      {/* <Phones></Phones> */}
      {/* <Footer></Footer> */}

      {/* <Demo></Demo> */}
    </div>
  )
}

export default App
