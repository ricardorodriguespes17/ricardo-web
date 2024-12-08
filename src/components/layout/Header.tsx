"use client"

import { useEffect, useState } from "react"
import Button from "../ui/Button"
import ButtonTheme from "../ui/ButtonTheme"
import { twMerge } from "tailwind-merge"
import ButtonDownloadCV from "../ui/ButtonDownloadCV"

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
        "min-h-[70px] w-full flex items-center px-[3%] justify-end fixed",
        "top-0 z-10 bg-gray-10 dark:bg-dark-90 transition-transform duration-500",
        hidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="hidden md:flex items-center gap-1">
        <Button size="sm" variant="plain">
          Sobre
        </Button>
        <Button size="sm" variant="plain">
          Carreira
        </Button>
        <Button size="sm" variant="plain">
          Habilidades
        </Button>
        <Button size="sm" variant="plain">
          Projetos
        </Button>
        <Button size="sm" variant="plain">
          Contato
        </Button>
        <ButtonTheme />
        <ButtonDownloadCV />
      </div>
    </header>
  )
}

export default Header
