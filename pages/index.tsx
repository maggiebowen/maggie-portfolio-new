import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Navigation from './components/Navigation';
import bgImg from './images/surf-background-cover-page.jpg';

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Maggie Bowen&#39;s Portafolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div>
        <div className={styles.bgWrap}>
          <Image
            alt="photo of Maggie surfing"
            src={bgImg}
            placeholder="blur"
            quality={100}
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <main className={styles.homePage}>
          <h1 className={styles.title}>
            <Link href="/">Maggie Bowen</Link>
          </h1>
          <p className={styles.description}>
            <i>
              <b>Artist, Coder, Teacher</b>
            </i>
          </p>
          <Navigation />
        </main>
      </div>
    </div>
  );
}

export default Home;
