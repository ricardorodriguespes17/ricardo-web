import { HiOutlineLocationMarker } from "react-icons/hi"
import ProfileImage from "../common/ProfileImage"
import Point from "../common/Point"
import Button from "../ui/Button"
import data from "@/data"
import { twMerge } from "tailwind-merge"

const {
  title,
  subtitle,
  description,
  availability,
  availabilityText,
  location,
  contactButtonText,
} = data.presentation

const PresentationSession = () => {
  return (
    <div
      className={twMerge(
        "h-fit w-full px-8 flex min-h-screen items-center",
        "sm:px-16 md:px-24 lg:px-32 md:mt-0"
      )}
    >
      <div className="flex flex-col-reverse md:flex-row items-center h-fit w-full">
        <div className="flex flex-1 flex-col justify-center items-center md:items-start gap-6 md:gap-6">
          <div className="flex flex-col gap-1 items-center md:items-start">
            <h1 className="dark:text-blue-dark">{title}</h1>
            <p className="text-gray-80 dark:text-blue-light">{subtitle}</p>
          </div>

          <p className="text-center md:text-start text-sm lg:text-base">
            {description}
          </p>

          <div className="flex flex-col gap-2 items-center md:items-start text-sm lg:text-base">
            <label className="flex items-center gap-1">
              <HiOutlineLocationMarker /> {location}
            </label>

            <label className="flex items-center gap-2">
              <Point available={availability} />
              {availabilityText}
            </label>
          </div>

          <Button
            href="#contact"
            target="_self"
            className="hover:bg-blue-light hover:text-dark-100 mt-10 md:mt-5"
          >
            {contactButtonText}
          </Button>
        </div>

        <div className="flex items-center justify-end md:pl-12 lg:pl-24">
          <ProfileImage />
        </div>
      </div>
    </div>
  )
}

export default PresentationSession
