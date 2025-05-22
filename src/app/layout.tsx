import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import data from "@/data"

export const metadata: Metadata = {
  ...data.meta,
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
