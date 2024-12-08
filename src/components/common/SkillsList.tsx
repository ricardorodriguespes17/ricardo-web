"use client"

import { useEffect, useState } from "react"
import { BsArrowBarDown, BsFillPersonLinesFill } from "react-icons/bs"
import Button from "../ui/Button"
import { twMerge } from "tailwind-merge"
import Image from "next/image"
import ReactIcon from "@/assets/icons/react.svg"
import { CgDatabase } from "react-icons/cg"
import { TbDeviceDesktopCode } from "react-icons/tb"

type SkillTypes = "frontend" | "backend" | "softs"

type Props = {
  type: SkillTypes
}

const titles = {
  frontend: "Frontend",
  backend: "Backend",
  softs: "Interpessoal",
}

const icons = {
  frontend: <TbDeviceDesktopCode />,
  backend: <CgDatabase />,
  softs: <BsFillPersonLinesFill />,
}

const openTimes = {
  frontend: 100,
  backend: 1000,
  softs: 1900,
}

const SkillsList = ({ type }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [firstOpen, setFirstOpen] = useState(false)

  useEffect(() => {
    if (firstOpen) {
      setTimeout(() => {
        setIsOpen(true)
      }, openTimes[type])
    }
  }, [firstOpen])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 1500) {
        setFirstOpen(true)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="flex flex-col bg-gray-30 dark:bg-dark-100 rounded-lg px-4 h-fit">
      <div className="w-full flex items-center gap-2 justify-between">
        <Button
          variant="plain"
          size="full"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="text-xl">{icons[type]}</span>
          <h3>{titles[type]}</h3>
          <BsArrowBarDown
            className={twMerge(
              "transition-transform duration-700 text-xl",
              isOpen ? "rotate-180" : "rotate-0"
            )}
          />
        </Button>
      </div>

      <div
        className={twMerge(
          "flex flex-col gap-3 overflow-hidden transition-all duration-700",
          isOpen ? "max-h-[300px] pb-4" : "max-h-0"
        )}
      >
        <div className="flex items-center gap-1 font-bold">
          <Image src={ReactIcon} alt="Icone do React" className="w-8" />
          <label>React</label>
        </div>
        <div className="flex items-center gap-1 font-bold">
          <Image src={ReactIcon} alt="Icone do React" className="w-8" />
          <label>React</label>
        </div>
        <div className="flex items-center gap-1 font-bold">
          <Image src={ReactIcon} alt="Icone do React" className="w-8" />
          <label>React</label>
        </div>
        <div className="flex items-center gap-1 font-bold">
          <Image src={ReactIcon} alt="Icone do React" className="w-8" />
          <label>React</label>
        </div>
      </div>
    </div>
  )
}

export default SkillsList
