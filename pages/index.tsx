import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
     
        <title>Sitesh</title>
        

        <h1 className={styles.title}>
          Sample <a href="https://twitter.com/insitesh">text!</a>
        </h1>

     
    </div>
    
  )
}

export default Home
