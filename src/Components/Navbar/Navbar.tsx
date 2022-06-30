import React from "react";
import style from './Navbar.module.css'

export function Navbar () {
    return (
        <nav className={style.nav}>
            <div>
                <a href='#'>Profiles</a>
            </div>
            <div>
                <a href='#'>Messages</a>
            </div>
            <div>
                <a href='#'>News</a>
            </div>
            <div>
                <a href='#'>Music</a>
            </div>
            <div>
                <a href='#'>Settings</a>
            </div>
        </nav>
    )
}