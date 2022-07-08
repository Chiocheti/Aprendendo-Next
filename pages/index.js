import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index_main.module.css'
import Link from 'next/link'

import Main_navbar from '../Components/main_navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title> BorderLands Wiki </title>
      </Head>
      <Main_navbar/>
      <h1 className={styles.fundo}> Borderlands 3</h1>
      <Image src={'/images/borderlands.jpg'} width="1920px" height="1080px" />
    </div>
  )
}
