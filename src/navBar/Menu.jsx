// import { useState } from 'react'
import './Menu.css'

const Menu = ({setTheme, theme, changeTheme}) => {

    // const [theme, setTheme] = useState("Dark")

    // const changeTheme = () => {
    //     setTheme(theme === 'Dark' ? 'Light' : 'Dark')
    // }

    return (
        <div className="menu-dd">
            <button className='theme menu-dd-item'> {theme}
                <div onClick={changeTheme} className='theme-out' style={{ backgroundColor: (theme === 'Light' ? 'white' : 'black') }}>
                    <svg className='dot' style={{ left: (theme === 'Light' ? '1.2rem' : '0rem') }} width="19" height="19" version="1.1" viewBox="0 0 16 16" ><circle cx="8" cy="8" r="8" /></svg>
                </div>
            </button >
            <div className='N menu-dd-item'>Notifications</div>
            <div className='help menu-dd-item'>Help</div>
            <div className='more menu-dd-item'>More</div>
            <div className='contact menu-dd-item'>Contact</div>
        </div >
    )
}

export default Menu