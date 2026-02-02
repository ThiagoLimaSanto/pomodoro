import { FaHome, FaSun, FaHistory, FaCog } from "react-icons/fa";
import Styles from "./styles.module.css"

export const Menu = () => {
    return (
        <nav className={Styles.menu}>
            <a className={Styles.menuLink} href="#">
                <FaHome />
            </a>
            <a className={Styles.menuLink} href="#">
                <FaHistory />
            </a>
            <a className={Styles.menuLink} href="#">
                <FaCog />
            </a>
            <a className={Styles.menuLink} href="#">
                <FaSun />
            </a>
        </nav>
    )
}