import { useEffect, useState } from "react";
import { FaCog, FaHistory, FaHome } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";

import { RouterLink } from "../RouterLink";
import Styles from "./styles.module.css";

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
            <RouterLink className={Styles.menuLink} href='/' aria-label='Ir para a home' title="Home">
                <FaHome />
            </RouterLink>
            <RouterLink className={Styles.menuLink} href='' aria-label='Ver histórico' title="Histórico">
                <FaHistory />
            </RouterLink>
            <RouterLink className={Styles.menuLink} href='' aria-label='Ir para Configurações' title="Configurações">
                <FaCog />
            </RouterLink>
            <a onClick={handleThemeChange} className={Styles.menuLink} href='' aria-label='Mudar Tema' title="Mudar Tema">
                {nextThemeIcon[theme]}
            </a>
        </nav>
    )
}