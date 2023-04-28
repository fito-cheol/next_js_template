import { Inter } from 'next/font/google';

import Appbar from 'common/components/appbar/basic';

const inter = Inter({ subsets: ['latin'] });

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Appbar></Appbar>

        {children}
      </body>
    </html>
  );
}
