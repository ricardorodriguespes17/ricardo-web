import { HiOutlineLocationMarker } from "react-icons/hi"
import ProfileImage from "../common/ProfileImage"
import Point from "../common/Point"
import Button from "../ui/Button"
import data from "@/data"

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
    <div className="min-h-screen h-fit w-full px-8 sm:px-16 md:px-24 lg:px-32 flex items-center">
      <div className="flex flex-col-reverse md:flex-row items-center h-fit w-full">
        <div className="flex flex-1 flex-col justify-center items-center md:items-start gap-3 md:gap-6">
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
            href="#contato"
            className="hover:bg-blue-light hover:text-dark-100"
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
