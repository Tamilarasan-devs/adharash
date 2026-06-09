import React, { useEffect, useState } from 'react'
import logo from '../../assets/img/logo.avif'
import './SplashScreen.css'

export default function SplashScreen() {
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setVisible(false), 3500)
        return () => clearTimeout(timer)
    }, [])

    if (!visible) return null

    return (
        <div className="splash-root">
            <div className="halo-ring halo-1" />
            <div className="halo-ring halo-2" />
            <div className="halo-ring halo-3" />
            <div className="halo-ring halo-4" />

            <div className="logo-wrap">
                <div className="logo-circle">
                    <img src={logo} alt="Adharsh Vidhyalaya Logo" className="logo-img" />
                    <div className="logo-arc" />
                </div>

                <h1 className="school-name">
                    Adharsh Vidhyalaya<br />Educational Institutions
                </h1>

                <p className="school-sub">Est. with Excellence</p>

                <div className="gold-bar" />

                <p className="tagline">Nurturing Minds · Shaping Futures</p>

                <div className="dots">
                    <div className="dot dot-1" />
                    <div className="dot dot-2" />
                    <div className="dot dot-3" />
                </div>
            </div>
        </div>
    )
}