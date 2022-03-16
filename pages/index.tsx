import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/indexMain.module.scss'
import Typical from 'react-typical'
const Home: NextPage = () => {
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
            <span className={styles.inputs}>
              <input type='text' name='search' />
              <label htmlFor='search'>
                <Typical
                  steps={[
                    '... ابحث باسم الفيلم او المسلسل او لعبة او برنامج ترغب فيه',
                    1000,
                    'مثال : الجزيرة',
                    1000,
                    'مثال : ادوبي',
                    1000,
                    'ابحث هنا في اكوام باسم الفيلم او المسلسل او اي لعبة او برنامج ترغب فيه',
                    1000,
                  ]}
                  loop={Infinity}
                  wrapper='p'
                />
              </label>
            </span>
            <button>بحث</button>
          </div>
          <div className={styles.searchContent}>
            <a href='#'>
              <Image src='/assets/images/mix.svg' height={38} width={38} />
              <p>منوعات</p>
            </a>
            <a href='#'>
              <Image src='/assets/images/programs.svg' height={38} width={38} />
              <p>برامج</p>
            </a>
            <a href='#'>
              <Image src='/assets/images/games.svg' height={38} width={38} />
              <p>العاب</p>
            </a>
            <a href='#'>
              <Image src='/assets/images/tv.svg' height={38} width={38} />
              <p>تلفزيون</p>
            </a>
            <a href='#'>
              <Image src='/assets/images/series.svg' height={38} width={38} />
              <p>مسلسلات</p>
            </a>
            <a href='#'>
              <Image src='/assets/images/films.svg' height={38} width={38} />
              <p>افلام</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
