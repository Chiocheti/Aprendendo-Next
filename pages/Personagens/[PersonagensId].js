import Link from "next/link";
import {useRouter} from "next/router";
import Image from "next/image";

import Main_navbar from "../../Components/main_navbar";
import Back_Button from "../../Components/back_button";

export default function personagens(){
    const router = useRouter()
    const PersonagensId = router.query.PersonagensId

    return(
        <div>
            <Main_navbar></Main_navbar>
            <h1> Personagem: {PersonagensId}</h1>
            <Image src={`/images/${PersonagensId}.jpg`} width="860px" height="467px" />
            <Back_Button></Back_Button>
        </div>
    )
}
