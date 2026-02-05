import { MdTimer } from "react-icons/md";

import Styles from "./styles.module.css"
import { RouterLink } from "../RouterLink";

export const Logo = () => {
    return (
        <div>
            <h1 className={Styles.logo}></h1>
            <RouterLink className={Styles.logoLink} href="/">
                <MdTimer />
                <span>Chronos</span>
            </RouterLink>
        </div>
    )
}