import data from "@/data"
import CareerItems from "../common/CareerItems"
import CareerOptions from "../common/CareerOptions"
import BaseSession from "../layout/BaseSession"

const CareerSession = () => {
  return (
    <BaseSession id="career">
      <h2 className="mb-4">{data.career.title}</h2>
      <CareerOptions />
      <CareerItems />
    </BaseSession>
  )
}

export default CareerSession
