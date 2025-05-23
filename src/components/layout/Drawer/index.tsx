"use client"

import { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import DrawerContent from "./DrawerContent"
import DrawerOutside from "./DrawerOutside"

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
        "fixed left-0 top-0 bg-transparent z-20 w-screen h-screen",
        "transition-all duration-300 flex md:w-0"
      )}
    >
      <DrawerContent isOpen={isOpen} setOpen={setOpen} />
      <DrawerOutside isOpen={isOpen} onClose={() => setOpen(false)} />
    </div>
  )
}

export default Drawer
