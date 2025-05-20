"use client"

import { useEffect, useState } from "react"
import { BsArrowBarDown, BsFillPersonLinesFill } from "react-icons/bs"
import Button from "../ui/Button"
import { twMerge } from "tailwind-merge"
import { CgDatabase } from "react-icons/cg"
import { TbDeviceDesktopCode } from "react-icons/tb"
import useSkills from "@/store/skillsStore"
import { SkillTypes } from "@/@types/SkillType"
import SkillsItemHeader from "./SkillsItemHeader"

type Props = {
  type: SkillTypes
}

const titles: Record<SkillTypes, string> = {
  frontend: "Frontend",
  backend: "Backend",
  interpersonal: "Interpessoal",
}

const icons: Record<SkillTypes, React.ReactNode> = {
  frontend: <TbDeviceDesktopCode />,
  backend: <CgDatabase />,
  interpersonal: <BsFillPersonLinesFill />,
}

const openTimes: Record<SkillTypes, number> = {
  frontend: 100,
  backend: 1000,
  interpersonal: 1900,
}

const SkillsList = ({ type }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [firstOpen, setFirstOpen] = useState(false)
  const { skills } = useSkills()

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
      if (currentScrollY > 1200) {
        setFirstOpen(true)
      } else {
        setFirstOpen(false)
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
        <SkillsItemHeader
          isOpen={isOpen}
          icon={icons[type]}
          title={titles[type]}
          setOpen={() => setIsOpen((value) => !value)}
        />
      </div>

      <div
        className={twMerge(
          "flex flex-col gap-3 overflow-hidden transition-all duration-700",
          isOpen ? "max-h-[300px] pb-4" : "max-h-0"
        )}
      >
        {skills
          .filter((item) => item.type === type)
          .map((skill, index) => (
            <div key={index} className="flex items-center gap-1 font-bold">
              <label>{skill.label}</label>
            </div>
          ))}
      </div>
    </div>
  )
}

export default SkillsList
