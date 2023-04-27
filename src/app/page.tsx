import Image from 'next/image';
import styles from './page.module.scss';
import Link from 'next/link';
import Head from 'next/head';
import ButtonRound from 'common/components/Button/round';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1> welcome to next.js! </h1>
        <Link href='dashboard'> Dashboard </Link>
        <Image
          src='/images/Belica.webp' // 프로필 사진 경로
          height={180}
          width={140}
          alt='belica'
        />
        <ButtonRound value='i like round' />
      </div>
    </main>
  );
}
