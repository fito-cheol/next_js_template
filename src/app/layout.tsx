'use client';
import { Inter } from 'next/font/google';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import darkTheme from './theme';
import createEmotionCache from './createEmotionCache';

import { Providers } from 'modules/redux/provider';

import Appbar from 'common/components/appbar/basic';

const inter = Inter({ subsets: ['latin'] });

const cache = createEmotionCache();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <CacheProvider value={cache}>
        <ThemeProvider theme={darkTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Providers>
            <body className={inter.className}>
              <Appbar></Appbar>

              {children}
            </body>
          </Providers>
        </ThemeProvider>
      </CacheProvider>
    </html>
  );
}
