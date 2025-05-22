"use client"

import { headerLinks } from "@/config/headerConfig"
import { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import Button from "../ui/Button"
import ButtonTheme from "../ui/ButtonTheme"
import ButtonDownloadCV from "../ui/ButtonDownloadCV"
import ButtonMenu from "../ui/ButtonMenu"

const Drawer = () => {
  const [isOpen, setOpen] = useState(false)
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

  if (hidden && !isOpen) return <></>

  return (
    <div
      className={twMerge(
        "flex flex-col p-4 gap-3 w-fit h-screen bg-white dark:bg-dark-90 fixed left-0 top-0",
        "overflow-hidden md:invisible transition-colors z-20",
        !isOpen && "bg-transparent"
      )}
    >
      <ButtonMenu onClick={() => setOpen((value) => !value)} />

      <div
        className={twMerge(
          "flex flex-col gap-3 flex-1 w-[300px] transition-all duration-500 overflow-hidden",
          !isOpen && "w-0 opacity-0"
        )}
      >
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
        <ButtonDownloadCV />
        <div className="flex flex-1 items-end">
          <ButtonTheme />
        </div>
      </div>
    </div>
  )
}

export default Drawer
