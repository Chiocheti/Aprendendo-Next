import Main_navbar from "../../Components/main_navbar"
import Link from "next/link"
import Image from "next/image"

export default function index(){
    return(
        <div>
            <Main_navbar/>
            
            <Link href={'./Personagens/Fl4k'}>
                <h3> Fl4k </h3>
            </Link>
            
            <Link href={'./Personagens/Moze'}>
                <h3 href=""> Moze </h3>
            </Link>

            <Link href={'./Personagens/Amara'}>
                <h3 href=""> Amara </h3>
            </Link>

            <Link href={'./Personagens/Zane'}>
                <h3 href=""> Zane </h3>
            </Link>

            <Image src={'/images/Fundo_Personagens.jpg'} width="1920px" height="1080px"></Image>
        
        </div>
    )
}