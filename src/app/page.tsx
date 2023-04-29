import Image from 'next/image';
import styles from './page.module.scss';
import Link from 'next/link';
import ButtonRound from 'common/components/button/round';

// https://beta.nextjs.org/docs/api-reference/metadata
export const metadata = {
  title: 'Next Template Home',
  description: 'Showing template',
  icons: {
    // https://beta.nextjs.org/docs/api-reference/metadata#icons
    icon: '/images/favicon.ico',
    shortcut: '/images/favicon.ico',
  },
};

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
        <ButtonRound label='i like round' />
      </div>
    </main>
  );
}
