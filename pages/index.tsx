import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/indexMain.module.scss'
import Typical from 'react-typical'
const Home: NextPage = () => {
  const Typing = () => (
    <Typical
      steps={['Hello', 1000, 'Hello world!', 1000]}
      loop={Infinity}
      wrapper='p'
    />
  )
  return (
    <div className={styles.main}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.background}>
        <Image
          className={styles.ImageBg}
          src='/assets/images/home-bg.webp'
          layout='fill'
        />
      </div>
      <div className={styles.header}>
        <div className={styles.rightHeader}>
          <img
            src='/assets/images/logo-white.svg'
            alt='logo'
            width={140}
            layout='fill'
          />
        </div>
        <section className={styles.leftHeader}>
          <div className={styles.menu}>
            <button className={styles.menubutton}>بالعربي</button>
            <div className={styles.dropdown}>
              <button>بالفرنسي</button>
              <button>بالإنجليزي</button>
            </div>
          </div>
          <a href='/login' className={styles.icons}>
            <img src='/assets/images/user-icon.svg' alt=''></img>
          </a>
        </section>
      </div>
      <div className={styles.midClass}>
        <div className={styles.circelAnimation}>
          <div className={styles.circel}>
            <img
              className={styles.cirleLogo}
              src='/assets/images/logo-center.svg'
              alt=''
            />
            <h1>الصفحة الرئيسية</h1>
          </div>
        </div>
        <div className={styles.searchBar}>
          <div className={styles.searchInput}>
            <input type='text' placeholder={Typing} />
            <button>search</button>
          </div>
          <div className={styles.searchContent}>
            <span>
              <p>icon</p>
              <p>text</p>
            </span>
            <span>
              <p>icon</p>
              <p>text</p>
            </span>
            <span>
              <p>icon</p>
              <p>text</p>
            </span>
            <span>
              <p>icon</p>
              <p>text</p>
            </span>
            <span>
              <p>icon</p>
              <p>text</p>
            </span>
            <span>
              <p>icon</p>
              <p>text</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
