import type React from "react";
import Styles from "./styles.module.css"

type HeadingProps = {
    children: React.ReactNode
}

export const Heading = ({ children }: HeadingProps) => {
    return (
        <h1 className={Styles.heading}>{children}</h1>
    )
}