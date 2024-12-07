import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ricardo Rodrigues | Dev. Fullstack",
  description: "Site de apresentação de Ricardo Rodrigues",
}

const font = Montserrat({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={font.className}>
      <body>{children}</body>
    </html>
  )
}
