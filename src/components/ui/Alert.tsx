"use client"

import useAlert from "@/store/alertStore"
import { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"

const Alert = () => {
  const [isShow, setShow] = useState(false)
  const { alert, clearAlert } = useAlert()

  useEffect(() => {
    if (alert) {
      setShow(true)
      setTimeout(clearAlert, 3000)
    } else {
      setShow(false)
    }
  }, [alert])

  return (
    <div
      className={twMerge(
        "w-[400px] px-4 py-3 bg-white font-bold",
        "rounded-lg drop-shadow-xl fixed left-4 bottom-4 flex flex-col gap-3 z-30",
        "transition-all duration-500 opacity-100 ease-out",
        !isShow && "opacity-0"
      )}
    >
      {alert?.title && <h3 className="h-[30px] align-middle">{alert.title}</h3>}
      <p className="h-[24px] align-middle">{alert?.content}</p>
    </div>
  )
}

export default Alert
