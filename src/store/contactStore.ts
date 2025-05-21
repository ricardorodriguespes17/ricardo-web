import { IconType } from "react-icons"
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { MdOutlineMail } from "react-icons/md"
import { create } from "zustand"

type ContactType = { label?: string; link?: string; Icon: IconType }

type State = {
  text: string
  contacts: ContactType[]
}

type Actions = {
  setContacts: (contacts: ContactType[]) => void
}

const useContact = create<State & Actions>()((set) => ({
  text: "Sinta-se à vontade para entrar em contato comigo se estiver procurando um desenvolvedor, tiver alguma dúvida ou simplesmente quiser se conectar.",
  contacts: [
    { label: "ricardor662@gmail.com", Icon: MdOutlineMail },
    { label: "+5577988792719", Icon: FaWhatsapp },
    {
      link: "https://www.linkedin.com/in/ricardorodrigues17/",
      Icon: FaLinkedin,
    },
    {
      link: "https://www.instagram.com/ricardo_rodrigues17/",
      Icon: FaInstagram,
    },
  ],
  setContacts: (contacts) => set({ contacts }),
}))

export default useContact
