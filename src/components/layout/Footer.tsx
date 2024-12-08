import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { MdOutlineMail } from "react-icons/md"
import Button from "../ui/Button"
import ButtonCopy from "../ui/ButtonCopy"

const infos = {
  email: "ricardor662@gmail.com",
  linkedin: "https://www.linkedin.com/in/ricardorodrigues17/",
  instagram: "https://www.instagram.com/ricardo_rodrigues17/",
  whatsapp: "+5577988792719",
}

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full flex flex-col items-center bg-dark-100 dark:bg-dark-90 text-white px-4">
      <div className="flex flex-col max-w-full items-center gap-10 py-5">
        <p className="w-[600px] max-w-full text-center text-sm">
          Sinta-se à vontade para entrar em contato comigo se estiver procurando
          um desenvolvedor, tiver alguma dúvida ou simplesmente quiser se
          conectar.
        </p>

        <div className="flex flex-col items-center font-bold gap-2 text-xl text-gray-30">
          <div className="flex items-center gap-2">
            <MdOutlineMail />
            <label className="text-white">{infos.email}</label>
            <ButtonCopy text={infos.email} />
          </div>
          <div className="flex items-center gap-2">
            <FaWhatsapp />
            <label className="text-white">{infos.whatsapp}</label>
            <ButtonCopy text={infos.whatsapp} />
          </div>
          <div className="flex">
            <Button variant="plain" href={infos.linkedin} target="_blank">
              <FaLinkedin />
            </Button>
            <Button variant="plain" href={infos.instagram} target="_blank">
              <FaInstagram />
            </Button>
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
