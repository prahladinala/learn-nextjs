import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      {/* ADDING META DATA */}
      <Head>
        {/* NORMAL HTML META TAGS */}
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, expedita. Hic cumque similique culpa eveniet quos dolorum animi perferendis est architecto ut at dignissimos, quidem odio. Atque quis illo dolorum?</p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae numquam quam aspernatur totam delectus minus corrupti amet vitae inventore accusamus vel, ducimus quisquam eveniet aliquam rem cum at obcaecati animi?
        </p>
        <Link href="/ninjas" >
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
