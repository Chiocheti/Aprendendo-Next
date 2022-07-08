import Back_Button from '../../Components/back_button'
import Main_navbar from '../../Components/main_navbar'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Styles from '../../styles/armas.module.css'

export default function index(){
    const router = useRouter();
    const FabricantesId = router.query.FabricantesId

    return(
        <div>
            <Main_navbar/>
            <h1 className={Styles.title}> {FabricantesId} </h1>
            <Image src={`/images/${FabricantesId}.jpg`} width="860px" height="467px"></Image>
            <Back_Button/>
        </div>
    )
}