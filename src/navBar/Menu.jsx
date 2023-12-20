// import { useState } from 'react'
import './Menu.css'

const Menu = ({setTheme, theme, changeTheme}) => {

    // const [theme, setTheme] = useState("Dark")

    // const changeTheme = () => {
    //     setTheme(theme === 'Dark' ? 'Light' : 'Dark')
    // }

    return (
        <div className="menu-dd">
            <button className='theme'> {theme}
                <div onClick={changeTheme} className='theme-out' style={{ backgroundColor: (theme === 'Light' ? 'white' : 'black') }}>
                    <svg className='dot' style={{ left: (theme === 'Light' ? '1.2rem' : '0rem') }} width="19" height="19" version="1.1" viewBox="0 0 16 16" ><circle cx="8" cy="8" r="8" /></svg>
                </div>
            </button >
            <div className='N'>Notifications</div>
            <div>Help</div>
            <div>More</div>
            <div>Contact</div>
        </div >
    )
}

export default Menu