import React, { useEffect } from "react";
import { Router, Outlet, ReactLocation } from '@tanstack/react-location'
import { useRecoilState } from 'recoil'
import { Observable } from 'windowed-observable'

import Home from 'home/Home'
import About from 'about/About'
import Experience from 'experience/Experience'
import Skills from 'skills/Skills'

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { themes } from '../stores'

const location = new ReactLocation()
const themeObservable = new Observable("theme")

const Routes = () => {

    const [theme, setTheme] = useRecoilState(themes)

    useEffect(() => {
        
        const themes = localStorage.getItem("theme")
        if(themes === null) {
            document.getElementsByTagName("body")[0].style.background = "#fff"
            themeObservable.publish("light")
            localStorage.setItem("theme", "light")
            setTheme(false)
        } else {
            if(themes === "dark") {
                themeObservable.publish("dark")
                setTheme(true)
                document.getElementsByTagName("body")[0].style.background = "#000"
            } else {
                document.getElementsByTagName("body")[0].style.background = "#fff"
                themeObservable.publish("light")
            }

        }

    }, [])

    return (
        <Router location={location} routes={[
            {
                path: "/",
                element : <Home/>
            }, 
            {
                path : "/about",
                element : <About/>
            },
            {
                path : "/skills",
                element : <Skills/>
            },
            {
                path : "/experience",
                element : <Experience/>
            }
        ]}>
            <Navigation/>
            <Outlet/>
            <Footer/>
        </Router>
    )
}

export default Routes