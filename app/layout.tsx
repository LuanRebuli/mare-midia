import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maré Midia",
  description: "⛵ Sua marca navegando em um mar de possibilidades!",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className="dark">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body className={inter.className}>
        <div className="flex h-full flex-col">
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
