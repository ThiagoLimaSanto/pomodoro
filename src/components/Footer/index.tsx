import Styles from "./styles.module.css"
import { RouterLink } from "../RouterLink"


export const Footer = () => {
    return (
        <footer className={Styles.footer}>
            <RouterLink href='/about-pomodoro/'>Entenda como funciona a técnica pomodoro/</RouterLink>
            <RouterLink href='/'>Chronos Pomodoro &copy; 2026</RouterLink>
        </footer>
    )
}