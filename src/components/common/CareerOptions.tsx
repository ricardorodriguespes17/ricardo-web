"use client"

import { useState } from "react"
import Button from "../ui/Button"

const options = ["Acadêmica", "Cursos", "Eventos", "Profissional"]

const CareerOptions = () => {
  const [selected, setSelected] = useState(0)

  return (
    <div className="flex gap-1">
      {options.map((item, index) => (
        <Button
          key={index}
          variant={selected === index ? "solid" : "outlined"}
          size="xs"
          onClick={() => setSelected(index)}
        >
          {item}
        </Button>
      ))}
    </div>
  )
}

export default CareerOptions
