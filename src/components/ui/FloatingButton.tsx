"use client"

import { useEffect, useState } from "react"
import Button from "./Button"
import { FaArrowUp } from "react-icons/fa"

const FloatingButton = () => {
  const [isShowedScrollTop, setIsShowedScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsShowedScrollTop(currentScrollY > 200)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!isShowedScrollTop) return

  return (
    <Button className="fixed bottom-4 right-4" onClick={handleScrollTop}>
      <FaArrowUp />
    </Button>
  )
}

export default FloatingButton
