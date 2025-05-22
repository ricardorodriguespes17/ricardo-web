"use client"

import React, { useEffect, useState } from "react"
import Button from "../ui/Button"
import ButtonTheme from "../ui/ButtonTheme"
import { twMerge } from "tailwind-merge"
import ButtonDownloadCV from "../ui/ButtonDownloadCV"
import { headerLinks } from "@/config/headerConfig"
import data from "@/data"

type Props = {
  children?: React.ReactNode
}

const Header = (props: Props) => {
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
        "top-0 z-10 bg-gray-10 dark:bg-dark-90 transition-transform duration-500 relative",
        hidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      {props.children}

      <div className="hidden md:flex items-center gap-1">
        {data.header.links.map((item, index) => (
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
