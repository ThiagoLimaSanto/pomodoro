import Styles from "./styles.module.css"

type GenericHtmlProps = {
    children: React.ReactNode
}

export function GenericHtml({ children }: GenericHtmlProps) {
    return (
        <div className={Styles.genericHtml}>
            {children}
        </div>
    )
}