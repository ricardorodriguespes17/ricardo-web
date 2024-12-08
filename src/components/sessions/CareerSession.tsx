import CareerItems from "../common/CareerItems"
import CareerOptions from "../common/CareerOptions"
import BaseSession from "../layout/BaseSession"

const CareerSession = () => {
  return (
    <BaseSession>
      <h2 className="mb-4">Carreira</h2>
      <CareerOptions />
      <CareerItems />
    </BaseSession>
  )
}

export default CareerSession
