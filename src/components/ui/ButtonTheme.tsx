"use client"

import { FiSun } from "react-icons/fi"
import Button from "./Button"

const ButtonTheme = () => {
  const toggleTheme = () => {}

  return (
    <Button variant="plain" onClick={toggleTheme}>
      <FiSun />
    </Button>
  )
}

export default ButtonTheme
