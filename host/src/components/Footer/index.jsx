import React from "react"
import { useRecoilState } from 'recoil'
import { themes } from '../../stores'
import "./footer.style.css"

const Footer = () => {
    const [theme, setTheme] = useRecoilState(themes)

    return (
        <div className={`footer ${theme === true ? "text-light" : "text-dark"}`}>
            Made with <span className="material-icons icn-love">favorite</span> by Exsan Renaldhi
        </div>
    )
}

export default Footer