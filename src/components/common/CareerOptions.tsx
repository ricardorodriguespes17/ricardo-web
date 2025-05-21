"use client"

import Button from "../ui/Button"
import useCareer from "@/store/careerStore"

const options: { id: CareerTypes; name: string }[] = [
  { id: "professional", name: "Profissional" },
  { id: "academic", name: "Acadêmica" },
  { id: "course", name: "Cursos" },
  { id: "event", name: "Eventos" },
]

const CareerOptions = () => {
  const { setTypeSelected, typeSelected } = useCareer()

  return (
    <div className="flex gap-1">
      {options.map((item, index) => (
        <Button
          key={index}
          variant={item.id === typeSelected ? "solid" : "outlined"}
          size="xs"
          onClick={() => setTypeSelected(item.id)}
        >
          {item.name}
        </Button>
      ))}
    </div>
  )
}

export default CareerOptions
