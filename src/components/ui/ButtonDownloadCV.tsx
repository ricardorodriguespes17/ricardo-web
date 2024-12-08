import { TbExternalLink } from "react-icons/tb"
import Button from "./Button"

const ButtonDownloadCV = () => {
  return (
    <Button
      target="_blank"
      size="sm"
      href="https://drive.google.com/file/d/1i444nZKAnfqXwPtdnMmU_XDmw5RGKhsY/view?usp=sharing"
    >
      Abrir currículo <TbExternalLink size={24} />
    </Button>
  )
}

export default ButtonDownloadCV
