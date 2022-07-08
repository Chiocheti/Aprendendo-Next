import Link from 'next/link'
export default function Back_Button(){
    return(
        <div>
            <Link href={'./'}>
                <button> back </button>
            </Link>
        </div>
    )
}