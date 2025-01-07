"use client"

import useCareer from "@/store/careerStore"

const CareerItems = () => {
  const { careers, typeSelected } = useCareer()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-4 max-h-[300px] overflow-auto shadow-[inset_0_-10px_10px_-10px_#00000020]">
      {careers
        .filter((item) => item.type === typeSelected)
        .map((item, index) => (
          <div
            key={index}
            className="flex h-fit flex-col gap-1 py-4 px-6 rounded-lg bg-gray-30 dark:bg-dark-100"
          >
            <h3>{item.title}</h3>
            <p className="text-sm text-gray-80 dark:text-gray-50">
              {item.period}
            </p>
          </div>
        ))}
    </div>
  )
}

export default CareerItems
