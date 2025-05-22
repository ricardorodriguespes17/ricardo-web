import data from "@/data"
import Button from "../ui/Button"
import ButtonCopy from "../ui/ButtonCopy"
import { MdOutlineMail } from "react-icons/md"
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { IconType } from "react-icons"

const iconMap: Record<string, IconType> = {
  MdOutlineMail,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
}

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer
      id="contact"
      className="w-full flex flex-col items-center bg-dark-90 dark:bg-dark-100 text-white px-4"
    >
      <div className="flex flex-col max-w-full items-center gap-10 py-5">
        <p className="w-[600px] max-w-full text-center text-sm">
          {data.contacts.text}
        </p>

        <div className="flex flex-col items-center font-bold gap-2 text-xl text-gray-30">
          {data.contacts.items
            .filter((item) => item.label)
            .map((item, index) => {
              const IconComponent = iconMap[item.icon]

              return (
                <div key={index} className="flex items-center gap-2">
                  <IconComponent />
                  <label className="text-white">{item.label}</label>
                  <ButtonCopy text={item.label as string} />
                </div>
              )
            })}
          <div className="flex items-center">
            {data.contacts.items
              .filter((item) => item.link)
              .map((item, index) => {
                const IconComponent = iconMap[item.icon]

                return (
                  <Button
                    key={index}
                    variant="plain"
                    href={item.link}
                    target="_blank"
                    className="text-2xl"
                  >
                    <IconComponent />
                  </Button>
                )
              })}
          </div>
        </div>
      </div>

      <label className="py-5 text-sm text-gray-50 text-center">
        <strong>{year} Ricardo Rodrigues</strong> {data.contacts.copyrightText}
      </label>
    </footer>
  )
}

export default Footer
