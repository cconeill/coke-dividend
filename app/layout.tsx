import type { Metadata } from 'next'
import './globals.css'
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Diet Coke Dividend Calculator',
  description: 'How much Coca-Cola stock do you need to own to pay your daily Diet Coke habit?',
  openGraph: {
    title: "Diet Coke Dividend Calculator",
    description: "How much Coca-Cola stock do you need to own to pay your daily Diet Coke habit?",
    url: "https://diet-coke-dividend.vercel.app/",
    siteName: "Diet Coke Dividend Calculator",
    images: [
      {
        url: "https://diet-coke-dividend.vercel.app/dietcoke.png",
        width: 1200,
        height: 630,
        alt: "Diet Coke habit",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diet Coke Dividend Calculator",
    description: "How much Coca-Cola stock do you need to own to pay your daily Diet Coke habit?",
    images: ["https://diet-coke-dividend.vercel.app/dietcoke.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
    <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* Other head elements */}
    </Head>
      <body>{children}</body>
    </html>
  )
}
