import Link from 'next/link'
export default function Back_Button(){
    return(
        <div>
            <Link href={'../Fabricantes'}>
                <a href=""> back </a>
            </Link>
        </div>
    )
}