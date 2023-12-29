import { useState } from 'react'
import './Navbar.css'
import Menu from './Menu'
import Login from './login/Login'

const Navbar = ({ theme, setTheme, changeTheme, setLoginPopup }) => {

    const [menudd, setMenudd] = useState(false)
    const [showLogin, setShowLogin] = useState(false)

    return (
        <div>
            <div className='nav'>
                <div className='logo'>
                    <img className='logo-svg' src="src\assets\logo.svg" alt="flapkart logo" />
                </div>

                <div className='search-bar'>
                    <input className='search' type="search" name="" id="" placeholder='Search for products, brands etc.,.' />
                    <button className='search-icon'>
                        <svg width="24" height="24" viewBox="0 0 32 32"><path d="M11,7h4a0,0,0,0,1,0,0v3a1,1,0,0,1-1,1H12a1,1,0,0,1-1-1V7A0,0,0,0,1,11,7Z" /><path d="M17,20H9a3,3,0,0,1-3-3V9A3,3,0,0,1,9,6h8a3,3,0,0,1,3,3v8A3,3,0,0,1,17,20ZM9,8A1,1,0,0,0,8,9v8a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1Z" /><path d="M31.09,26.67l-7-7a13,13,0,1,0-4.42,4.42l7,7a3.09,3.09,0,0,0,2.21.91,3.13,3.13,0,0,0,2.21-5.33ZM2,13A11,11,0,1,1,13,24,11,11,0,0,1,2,13ZM28.88,30a1.11,1.11,0,0,1-.79-.33l-6.73-6.73a13.1,13.1,0,0,0,1.58-1.58l6.73,6.73a1.1,1.1,0,0,1,.33.79A1.12,1.12,0,0,1,28.88,30Z" /></svg>
                    </button>
                </div>

                <div className='login-all'
                    onMouseEnter={() => setShowLogin(true)} onMouseLeave={() => setShowLogin(false)}
                    style={{ backgroundColor: 'white', position: 'relative' }}>
                    <button className='login-info'
                        onClick={() => setLoginPopup(true)}>
                        <svg className='user-svg' height="24" width="24" version="1.1" viewBox="0 0 24 24"><path d="M12,0C5.4,0,0,5.4,0,12c0,6.6,5.4,12,12,12s12-5.4,12-12C24,5.4,18.6,0,12,0z M12,4c2.2,0,4,2.2,4,5s-1.8,5-4,5   s-4-2.2-4-5S9.8,4,12,4z M18.6,19.5C16.9,21,14.5,22,12,22s-4.9-1-6.6-2.5c-0.4-0.4-0.5-1-0.1-1.4c1.1-1.3,2.6-2.2,4.2-2.7   c0.8,0.4,1.6,0.6,2.5,0.6s1.7-0.2,2.5-0.6c1.7,0.5,3.1,1.4,4.2,2.7C19.1,18.5,19.1,19.1,18.6,19.5z" /></svg>
                        <p>Login</p>
                        <div className='arrow'><svg className='arrow-svg' height="14" width="14" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg></div>
                    </button>

                    {showLogin && <Login></Login>}

                </div>

                <button className='cart'>
                    <svg className='cart-icon' viewBox="0 0 576 512" ><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z" /></svg>
                    <div className='cart-no'>22</div>
                </button>

                <button className='wallet'>
                    <svg className='wallet-icon' height="29" width="29" viewBox="0 0 512 512"  ><title /><path d="M47.5,104H432V51.52a16,16,0,0,0-19.14-15.69l-368,60.48a16,16,0,0,0-12,10.47A39.69,39.69,0,0,1,47.5,104Z" /><path d="M463.5,128H47.5a16,16,0,0,0-16,16V432a16,16,0,0,0,16,16h416a16,16,0,0,0,16-16V144A16,16,0,0,0,463.5,128ZM368,320a32,32,0,1,1,32-32A32,32,0,0,1,368,320Z" /><path d="M31.33,259.5V116c0-12.33,5.72-18.48,15.42-20,35.2-5.53,108.58-8.5,108.58-8.5s-8.33,16-27.33,16V128c18.5,0,31.33,23.5,31.33,23.5L84.83,236Z" /></svg>
                    <svg className='rupee-icon' height="16" width="16" data-name="Layer 1" viewBox="0 0 24 24" ><path d="M18,7H15.79a5.49,5.49,0,0,0-1-2H18a1,1,0,0,0,0-2H7A1,1,0,0,0,7,5h3.5a3.5,3.5,0,0,1,3.15,2H7A1,1,0,0,0,7,9h7a3.5,3.5,0,0,1-3.45,3H7a.7.7,0,0,0-.14,0,.65.65,0,0,0-.2,0,.69.69,0,0,0-.19.1l-.12.07,0,0a.75.75,0,0,0-.14.17,1.1,1.1,0,0,0-.09.14.61.61,0,0,0,0,.18A.65.65,0,0,0,6,13s0,0,0,0a.7.7,0,0,0,0,.14.65.65,0,0,0,0,.2.69.69,0,0,0,.1.19s0,.08.07.12l6,7a1,1,0,0,0,1.52-1.3L9.18,14H10.5A5.5,5.5,0,0,0,16,9h2a1,1,0,0,0,0-2Z" fill="#6563ff" /></svg>
                    <div className='money'>1000</div>
                </button>

                <button className='menu' onMouseEnter={() => setMenudd(true)} onMouseLeave={() => setMenudd(false)}>
                    <svg className='menu-logo' height="29" width="29" viewBox="0 0 256 256"><path d="M156,128a28,28,0,1,1-28-28A28.1,28.1,0,0,1,156,128ZM128,76a28,28,0,1,0-28-28A28.1,28.1,0,0,0,128,76Zm0,104a28,28,0,1,0,28,28A28.1,28.1,0,0,0,128,180Z" /></svg>

                    {menudd && <Menu setTheme={setTheme} theme={theme} changeTheme={changeTheme}></Menu>}
                </button>
            </div>
        </div>
    )
}

export default Navbar