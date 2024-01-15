import styles from "./navBar.module.css"

function NavBar(){
    return(
        <>
            <nav className={styles.navBar}>
                <div className={styles.item}>Profile</div>
                <div className={styles.item}>Message</div>
                <div className={styles.item}>News</div>
                <div className={styles.item}>Music</div>
                <div className={styles.item}>Setting</div>
            </nav>
        </>
    )
}

export default NavBar