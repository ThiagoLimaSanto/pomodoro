import { Link } from "react-router-dom"
import Styles from "./styles.module.css"


export const Footer = () => {
    return (
        <footer className={Styles.footer}>
            <Link to='/about-pomodoro/'>Entenda como funciona a técnica pomodoro/</Link>
            <Link to='/'>Chronos Pomodoro &copy; 2026</Link>
        </footer>
    )
}