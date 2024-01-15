import styles from "./header.module.css"

function Header() {
    return(
        <>
        <header className={styles.header}>
            <img className={styles.img} src="https://upload.wikimedia.org/wikipedia/commons/2/2c/OneWeb_Logo.png" />
        </header>
        </>
    )
}
export default Header