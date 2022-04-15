import React, { useEffect, useState } from "react";
import Profile from './assets/images/profile_images.jpg'
import { Observable } from 'windowed-observable'
import "./index.css";

const themeObservable = new Observable("theme")

const Home = () => {
    const [thme, setThme] = useState("light")

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if(theme !== null) {
            setThme(theme)
        }
        
        themeObservable.subscribe(setThme)
        return () => {
            themeObservable.unsubscribe(setThme)
        }
    }, [])

    return (
        <div className="container">
            <div className="status-server">
                <span className="material-icons" style={{fontSize:"13px",marginRight:"5px", color:"#2ecc71"}}>dns</span>
                <span className={thme === "dark" ? "text-light" : "text-dark" }>MF home server</span>&nbsp;
                <a href="http://localhost:3011/" target="_blank" style={{color:"#2980b9"}}>http://localhost:3011/</a>
            </div>
            <div>
                <img src={Profile} alt="profile" width={200} className="profile"/>
            </div>
            <div className={ `about-me ${thme === "dark" ? "text-light" : "text-dark"}` }>
                Hi, I'm a frontend developer who likes to learn new things, hard worker, and likes challenges
            </div>
            <div className={`contact ${thme === "dark" ? "text-light" : "text-dark"}`}>
                <div className="contact-title">
                    Contact :
                </div>
                <div>
                    <div>
                        <span className={thme === "dark" ? "text-light" : "text-dark" }>
                            *)  exsan172@gmail.com (Email)
                        </span>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/exsan-renaldhi" target="_blank" className={thme === "dark" ? "text-light" : "text-dark" } style={{textDecoration:'none'}}>
                            *)  Exsan Renaldhi (Linkedin)
                        </a>
                    </div>
                </div>
                <div style={{marginTop: "20px", fontWeight:"bold", fontSize:"20px"}}>
                    <div>
                        <a href="https://github.com/exsan172" target="_blank" className={thme === "dark" ? "text-light" : "text-dark" } style={{textDecoration:'none'}}>
                            Github Pages https://github.com/exsan172
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home