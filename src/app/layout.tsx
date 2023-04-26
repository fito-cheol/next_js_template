import "./globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// https://beta.nextjs.org/docs/api-reference/metadata
export const metadata = {
  title: "Next Template Home",
  description: "Showing template",
  icons: {
    // https://beta.nextjs.org/docs/api-reference/metadata#icons
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1> Global Layout like appbar </h1>
        {children}
      </body>
    </html>
  );
}
