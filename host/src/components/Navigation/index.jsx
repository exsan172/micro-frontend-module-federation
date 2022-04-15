import React, { useState } from "react";
import { Link } from '@tanstack/react-location'
import ToggleButton from 'react-toggle-button'
import { useRecoilState } from 'recoil'
import { Observable } from 'windowed-observable'

import { themes } from '../../stores'
import "./navigation.style.css"
import Logo from "../../assets/images/exr_logo.png"

const themeObserve = new Observable('theme')

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [value, setValue]       = useRecoilState(themes)

    const changeTheme = (value) => {
        if(value === false) {
            setValue(true)
            localStorage.setItem("theme", "dark")
            themeObserve.publish("dark")
            document.getElementsByTagName("body")[0].style.background = "#000"
        } else {
            setValue(false)
            localStorage.setItem("theme", "light")
            themeObserve.publish("light")
            document.getElementsByTagName("body")[0].style.background = "#fff"
        }
    }

    return (
        <>
            <div className="navbars">
                <div className="brand">
                    <img src={Logo} alt="logo" width={40}/>
                </div>
                <div className="link-large">
                    <Link to="/" className="link-items">
                        Home
                    </Link>
                    <Link to="/skills" className="link-items">
                        Skills
                    </Link>
                    <Link to="/experience" className="link-items">
                        Experience
                    </Link>
                    <Link to="/about" className="link-items">
                        About
                    </Link>
                </div>
                <div className="dark-mode-btn">
                    <ToggleButton
                        value={ value }
                        onToggle={(value) => { changeTheme(value) }} 
                    />
                    <span>
                        Dark mode
                    </span>
                </div>
                <div className="btn-menu">
                    <span className="material-icons" onClick={() => setShowMenu( showMenu === true ? false : true )}>menu</span>
                </div>
            </div>

            {
                showMenu === true &&
                <div className="nav-small">
                    <Link to="/" className="link-items-small">
                        Home
                    </Link>
                    <Link to="/skills" className="link-items-small">
                        Skills
                    </Link>
                    <Link to="/experience" className="link-items-small">
                        Experience
                    </Link>
                    <Link to="/about" className="link-items-small">
                        About
                    </Link>
                    <div className="dark-mode-btn-small">
                        <ToggleButton
                            value={ value }
                            onToggle={(value) => { changeTheme(value) }} 
                        />
                        <span>
                            Dark mode
                        </span>
                    </div>
                </div>
            }
        </>
    )
}

export default Navigation