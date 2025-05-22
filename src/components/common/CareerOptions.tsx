"use client"

import data from "@/data"
import Button from "../ui/Button"
import useCareer from "@/store/careerStore"

const CareerOptions = () => {
  const { setTypeSelected, typeSelected } = useCareer()

  return (
    <div className="flex gap-1">
      {data.career.types.map((item, index) => (
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
