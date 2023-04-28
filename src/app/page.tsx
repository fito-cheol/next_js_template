'use client';

import Image from 'next/image';
import styles from './page.module.scss';
import Link from 'next/link';
import ButtonRound from 'common/components/button/round';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import darkTheme from './theme';
import createEmotionCache from './createEmotionCache';
import { Stack, Button } from '@mui/material';

const cache = createEmotionCache();

export default function Home() {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={darkTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
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
            <Stack spacing={2} direction='row'>
              <Button variant='text'>Text</Button>
              <Button variant='contained'>Contained</Button>
              <Button variant='outlined'>Outlined</Button>
            </Stack>
          </div>
        </main>
      </ThemeProvider>
    </CacheProvider>
  );
}
