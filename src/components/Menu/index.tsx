import { FaHome, FaHistory, FaCog } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { useState, useEffect } from "react";

import Styles from "./styles.module.css"
import { Link } from "react-router-dom";

type AvailableThemes = 'dark' | 'light'

export const Menu = () => {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark'

        return storageTheme
    });

    const nextThemeIcon = {
        dark: <FiSun />,
        light: <MdDarkMode />
    }

    const handleThemeChange = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        setTheme(prevTheme => {
            return prevTheme === 'dark' ? 'light' : 'dark'
        })
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme])

    return (
        <nav className={Styles.menu}>
            <Link className={Styles.menuLink} to='/' aria-label='Ir para a home' title="Home">
                <FaHome />
            </Link>
            <Link className={Styles.menuLink} to='' aria-label='Ver histórico' title="Histórico">
                <FaHistory />
            </Link>
            <Link className={Styles.menuLink} to='' aria-label='Ir para Configurações' title="Configurações">
                <FaCog />
            </Link>
            <Link onClick={handleThemeChange} className={Styles.menuLink} to='' aria-label='Mudar Tema' title="Mudar Tema">
                {nextThemeIcon[theme]}
            </Link>
        </nav>
    )
}