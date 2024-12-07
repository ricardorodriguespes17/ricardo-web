"use client"

import { FiMoon, FiSun } from "react-icons/fi"
import Button from "./Button"
import useTheme from "@/store/themeStore"

const ButtonTheme = () => {
  const { toggleTheme, themeMode } = useTheme()

  return (
    <Button variant="plain" onClick={toggleTheme}>
      {themeMode == "dark" ? <FiMoon /> : <FiSun />}
    </Button>
  )
}

export default ButtonTheme
