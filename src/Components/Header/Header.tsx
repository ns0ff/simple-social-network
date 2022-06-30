import React from "react";
import styles from './Header.module.css'

export function Header () {
    return (
        <header className={styles.header}>
            <img src="https://assets.dryicons.com/uploads/icon/svg/10841/a2d00c35-4efa-4eca-a129-6fb84a64e1c2.svg"
                 alt="logo"/>
        </header>
    )
}