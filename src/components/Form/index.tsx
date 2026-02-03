import { FaPlayCircle } from "react-icons/fa";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

import Styles from "./styles.module.css"

export function Form() {
    return (
        <form className={Styles.form}>
            <div className={Styles.formRow}>
                <DefaultInput type="text" id="task" labelText="Task" placeholder='Digite algo...' />
            </div>

            <div className={Styles.formRow}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className={Styles.formRow}>
                <Cycles />
            </div>

            <div className={Styles.formRow}>
                <DefaultButton icon={<FaPlayCircle />} color='green' />
            </div>
        </form>
    )
}