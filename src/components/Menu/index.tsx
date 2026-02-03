import { FaHome, FaHistory, FaCog } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import Styles from "./styles.module.css"
import { useState, useEffect } from "react";

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
            <a className={Styles.menuLink} href="#" aria-label='Ir para a home' title="Home">
                <FaHome />
            </a>
            <a className={Styles.menuLink} href="#" aria-label='Ver histórico' title="Histórico">
                <FaHistory />
            </a>
            <a className={Styles.menuLink} href="#" aria-label='Ir para Configurações' title="Configurações">
                <FaCog />
            </a>
            <a onClick={handleThemeChange} className={Styles.menuLink} href="#" aria-label='Mudar Tema' title="Mudar Tema">
                {nextThemeIcon[theme]}
            </a>
        </nav>
    )
}