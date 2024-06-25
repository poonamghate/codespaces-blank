import React from 'react'
import styles from './Navbar.module.css';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Logo/>
            <Button text="Give Feedback"/>
        </nav>
    )
}

export default Navbar