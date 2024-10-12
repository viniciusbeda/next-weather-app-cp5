import Link from "next/link"
import styles from './Menu.module.css'
 
export const Menu = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <Link className={styles.link} href={'/'}>Inicio</Link>
                </li>
                <li className={styles.li}>
                    <Link className={styles.link} href={'/search'}>Busca</Link>
                </li>
                <li className={styles.li}>
                    <Link className={styles.link} href={'/favorites'}>Favoritos</Link>
                </li>
                <li className={styles.li}>
                    <Link className={styles.link} href={'/profile'}>Perfil</Link>
                </li>
            </ul>
        </nav>
    )
}