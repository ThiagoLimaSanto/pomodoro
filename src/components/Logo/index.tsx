import { MdTimer } from "react-icons/md";

import Styles from "./styles.module.css"

export const Logo = () => {
    return (
        <div>
            <h1 className={Styles.logo}></h1>
            <a className={Styles.logoLink} href="#">
                <MdTimer/>
                <span>Chronos</span>
            </a>
        </div>
    )
}