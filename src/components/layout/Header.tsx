import { FiSun } from "react-icons/fi"
import Button from "../ui/Button"
import ButtonTheme from "../ui/ButtonTheme"

const Header = () => {
  return (
    <header className="min-h-[70px] w-full flex items-center px-[3%] justify-end fixed top-0 z-10 bg-white dark:bg-dark-90">
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
