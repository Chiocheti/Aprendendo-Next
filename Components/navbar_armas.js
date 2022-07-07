import Link from 'next/link'

export default function Navbar_armas(){
    return(
        <div>
            <ul>
                <li>
                    <Link href={"../Fabricantes/Atlas"}>
                        <a href=""> Atlas</a>
                    </Link>
                </li>
                <li>
                    <Link href={"../Fabricantes/Cov"}>
                        <a href=""> Cov</a>
                    </Link>
                </li>
                <li>
                    <Link href={"../Fabricantes/Dahl"}>
                        <a href=""> Dahl</a>
                    </Link>
                </li>
                <li>
                    <Link href={"../Fabricantes/Hyperion"}>
                        <a href=""> Hyperion</a>
                    </Link>
                </li>
                <li>
                    <Link href={"../Fabricantes/Jakobs"}>
                        <a href=""> Jakobs</a>
                    </Link>
                </li>
                <li>
                    <Link href={"../Fabricantes/Maliwan"}>
                        <a href=""> Maliwan</a>
                    </Link>
                </li>
                <li>
                    <Link href={"../Fabricantes/Tediore"}>
                        <a href=""> Tediore</a>
                    </Link>
                </li>
                <li>
                    <Link href={"../Fabricantes/Torgue"}>
                        <a href=""> Torgue</a>
                    </Link>
                </li>
                <li>
                    <Link href={"../Fabricantes/Vladof"}>
                        <a href=""> Vladof</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}