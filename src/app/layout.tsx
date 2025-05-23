import type { Metadata } from "next"
import { GoogleAnalytics } from "@next/third-parties/google"
import { Montserrat } from "next/font/google"
import "./globals.css"
import data from "@/data"

const gaId = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  ...data.meta,
}

const font = Montserrat({
  subsets: ["latin"],
})

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br" suppressHydrationWarning className={font.className}>
      <body>{children}</body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  )
}

export default RootLayout
