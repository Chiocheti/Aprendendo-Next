import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Main_navbar from '../Components/main_navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title> BorderLands Wiki </title>
      </Head>
      <Main_navbar/>
      <h1> Borderlands </h1>
    </div>
  )
}
