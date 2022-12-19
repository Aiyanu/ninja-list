import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content='ninjas'/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ac mauris vel hendrerit. Mauris ultrices neque ac magna pulvinar, a ultrices velit sodales. Donec cursus lacus euismod erat accumsan mattis. Praesent sed dui eu arcu placerat sodales ut at massa. Cras sed pulvinar justo. Curabitur aliquet ipsum ultrices, ullamcorper ligula et, lobortis nisl. Mauris ultricies purus leo, vel pellentesque eros ultricies iaculis. Donec eu rhoncus lorem. Nulla neque elit, ullamcorper eget neque eget, commodo vestibulum dui. Ut volutpat massa et ante dictum, sit amet euismod felis sodales. Duis congue sapien id quam euismod, vel condimentum sapien cursus. Suspendisse aliquam erat enim, eget sollicitudin est posuere sed. Suspendisse potenti. Duis vitae sapien eros.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ac mauris vel hendrerit. Mauris ultrices neque ac magna pulvinar, a ultrices velit sodales. Donec cursus lacus euismod erat accumsan mattis. Praesent sed dui eu arcu placerat sodales ut at massa. Cras sed pulvinar justo. Curabitur aliquet ipsum ultrices, ullamcorper ligula et, lobortis nisl. Mauris ultricies purus leo, vel pellentesque eros ultricies iaculis. Donec eu rhoncus lorem. Nulla neque elit, ullamcorper eget neque eget, commodo vestibulum dui. Ut volutpat massa et ante dictum, sit amet euismod felis sodales. Duis congue sapien id quam euismod, vel condimentum sapien cursus. Suspendisse aliquam erat enim, eget sollicitudin est posuere sed. Suspendisse potenti. Duis vitae sapien eros.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ac mauris vel hendrerit. Mauris ultrices neque ac magna pulvinar, a ultrices velit sodales. Donec cursus lacus euismod erat accumsan mattis. Praesent sed dui eu arcu placerat sodales ut at massa. Cras sed pulvinar justo. Curabitur aliquet ipsum ultrices, ullamcorper ligula et, lobortis nisl. Mauris ultricies purus leo, vel pellentesque eros ultricies iaculis. Donec eu rhoncus lorem. Nulla neque elit, ullamcorper eget neque eget, commodo vestibulum dui. Ut volutpat massa et ante dictum, sit amet euismod felis sodales. Duis congue sapien id quam euismod, vel condimentum sapien cursus. Suspendisse aliquam erat enim, eget sollicitudin est posuere sed. Suspendisse potenti. Duis vitae sapien eros.</p>
        <Link className={styles.btn} href="/ninjas">See Ninjas Listing</Link>
      </div>
    </>
  )
}
