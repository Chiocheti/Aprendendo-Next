import Link from "next/link"
import Styles from '../styles/main_navbar.module.css'

export default function Main_navbar(){
    return(
        <div className={Styles.main_navbar}>
            <Link href={'/'}>
                <a href=""> Inicio </a>
            </Link>
            <Link href={'/Fabricantes'}> 
                <a href=""> Fabricantes </a>
            </Link>
            <Link href={'/Personagens'}>
                <a href=""> Personagens </a>
            </Link>
        </div>
    )

}