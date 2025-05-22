import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import data from "@/data"

export const metadata: Metadata = {
  title: `${data.presentation.title} | ${data.presentation.subtitle}`,
  description: `Site de apresentação de ${data.presentation.title}`,
  openGraph: {
    title: `${data.presentation.title} | ${data.presentation.subtitle}`,
    description: `Site de apresentação de ${data.presentation.title}`,
    type: "website",
    images: [
      {
        url: data.portifolio.avatar,
        width: 1200,
        height: 630,
        alt: "Texto alternativo da imagem",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

const font = Montserrat({
  subsets: ["latin"],
})

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br" className={font.className}>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
