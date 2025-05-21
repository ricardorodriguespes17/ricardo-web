"use client"

import Button from "../ui/Button"
import ButtonCopy from "../ui/ButtonCopy"
import useContact from "@/store/contactStore"

const Footer = () => {
  const year = new Date().getFullYear()
  const { contacts, text } = useContact()

  return (
    <footer
      id="contact"
      className="w-full flex flex-col items-center bg-dark-90 dark:bg-dark-100 text-white px-4"
    >
      <div className="flex flex-col max-w-full items-center gap-10 py-5">
        <p className="w-[600px] max-w-full text-center text-sm">{text}</p>

        <div className="flex flex-col items-center font-bold gap-2 text-xl text-gray-30">
          {contacts
            .filter((item) => item.label)
            .map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <item.Icon />
                <label className="text-white">{item.label}</label>
                <ButtonCopy text={item.label as string} />
              </div>
            ))}
          <div className="flex items-center">
            {contacts
              .filter((item) => item.link)
              .map((item, index) => (
                <Button
                  key={index}
                  variant="plain"
                  href={item.link}
                  target="_blank"
                  className="text-2xl"
                >
                  <item.Icon />
                </Button>
              ))}
          </div>
        </div>
      </div>

      <label className="py-5 text-sm text-gray-50 text-center">
        <strong>{year} Ricardo Rodrigues</strong> Todos os direitos reservados.
      </label>
    </footer>
  )
}

export default Footer
