"use client"

import { useEffect, useState } from "react"
import Button from "../ui/Button"
import ButtonTheme from "../ui/ButtonTheme"
import { twMerge } from "tailwind-merge"
import ButtonDownloadCV from "../ui/ButtonDownloadCV"
import { IoIosMenu } from "react-icons/io"

const headerLinks = [
  { label: "Sobre", link: "about" },
  { label: "Carreira", link: "career" },
  { label: "Habilidades", link: "skills" },
  { label: "Portifolio", link: "portifolio" },
  { label: "Contato", link: "contact" },
]

const Header = () => {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setHidden(currentScrollY > 200)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={twMerge(
        "min-h-[70px] w-full flex items-center px-1 md:px-[3%] justify-start md:justify-end md:fixed",
        "top-0 z-10 bg-gray-10 dark:bg-dark-90 transition-transform duration-500",
        hidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <Button variant="plain" className="visible md:invisible">
        <IoIosMenu size={40} />
      </Button>

      <div className="hidden md:flex items-center gap-1">
        {headerLinks.map((item, index) => (
          <Button
            key={index}
            href={`#${item.link}`}
            target="_self"
            size="sm"
            variant="plain"
          >
            {item.label}
          </Button>
        ))}
        <ButtonTheme />
        <ButtonDownloadCV />
      </div>
    </header>
  )
}

export default Header
