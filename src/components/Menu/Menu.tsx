import { BiHeart, BiHomeAlt, BiSearch, BiUserCircle } from "react-icons/bi";
import Link from "next/link"
import styles from './Menu.module.css'

export const Menu = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <BiHomeAlt size="1.5rem" color="#38aede" />
                    <Link className={styles.link} href={'/'}>Inicio</Link>
                </li>
                <li className={styles.li}>
                    <BiSearch size="1.5rem" color="#38aede" />
                    <Link className={styles.link} href={'/busca'}>Busca</Link>
                </li>
                <li className={styles.li}>
                    <BiHeart size="1.5rem" color="#38aede" />
                    <Link className={styles.link} href={'/favoritos'}>Favoritos</Link>
                </li>
                <li className={styles.li}>
                    <BiUserCircle size="1.5rem" color="#38aede" />
                    <Link className={styles.link} href={'/perfil'}>Perfil</Link>
                </li>
            </ul>
        </nav>
    )
}