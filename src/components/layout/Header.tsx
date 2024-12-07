import { FiSun } from "react-icons/fi"
import Button from "../ui/Button"
import ButtonTheme from "../ui/ButtonTheme"

const Header = () => {
  return (
    <header className="h-[70px] w-full flex items-center px-[3%] justify-end">
      <div className="hidden md:flex items-center gap-1">
        <Button size="sm" variant="plain">
          Sobre
        </Button>
        <Button size="sm" variant="plain">
          Carreira
        </Button>
        <Button size="sm" variant="plain">
          Habilidades
        </Button>
        <Button size="sm" variant="plain">
          Projetos
        </Button>
        <Button size="sm" variant="plain">
          Contato
        </Button>
        <ButtonTheme />
        <Button size="sm">Baixar currículo</Button>
      </div>
    </header>
  )
}

export default Header
