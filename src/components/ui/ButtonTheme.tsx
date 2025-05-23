"use client"

import { FiMoon, FiSun } from "react-icons/fi"
import Button from "./Button"
import useTheme from "@/store/themeStore"
import { useEffect } from "react"

const ButtonTheme = () => {
  const { toggleTheme, themeMode } = useTheme()

  useEffect(() => {
    toggleTheme()
  }, [])

  return (
    <Button variant="plain" onClick={toggleTheme}>
      {themeMode == "dark" ? <FiMoon /> : <FiSun />}
    </Button>
  )
}

export default ButtonTheme
