"use client"

import useCareer from "@/store/careerStore"
import { twMerge } from "tailwind-merge"
import CareerItemLogo from "./CareerItemLogo"
import data from "@/data"

const CareerItems = () => {
  const { typeSelected } = useCareer()

  return (
    <div
      className={twMerge(
        "flex flex-wrap mt-10 gap-4",
        "h-fit max-h-[300px] overflow-auto"
      )}
    >
      {data.career.items
        .filter((item) => item.type === typeSelected)
        .sort((a, b) => a.position - b.position)
        .map((item, index) => (
          <div
            key={index}
            className={twMerge(
              "flex min-h-max w-[300px] rounded-lg bg-gray-30 dark:bg-dark-100",
              "p-4 gap-3 flex-1 md:flex-none"
            )}
          >
            <CareerItemLogo companyLogo={item.companyLogo} />

            <div key={index} className="flex flex-col gap-1">
              <h4>{item.title}</h4>
              <p className="text-sm text-gray-80 dark:text-gray-50">
                {item.period}
              </p>
              <strong className="text-sm text-gray-80 dark:text-gray-50">
                {item.company}
              </strong>
            </div>
          </div>
        ))}
    </div>
  )
}

export default CareerItems
