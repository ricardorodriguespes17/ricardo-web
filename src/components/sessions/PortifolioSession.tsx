import { TbExternalLink } from "react-icons/tb"
import RepoItems from "../common/RepoItems"
import BaseSession from "../layout/BaseSession"
import Button from "../ui/Button"

const PortifolioSession = () => {
  return (
    <BaseSession>
      <h2 className="mb-4">Portifólio</h2>

      <div className="flex w-full gap-4">
        <img
          src="https://avatars.githubusercontent.com/u/39037180?v=4"
          alt="Foto do perfil do Github de Ricardo"
          className="w-20 aspect-square rounded-full"
        />

        <div className="flex flex-col w-[350px]">
          <h4>Ricardo Rodrigues</h4>
          <p className="text-sm text-gray-80">
            Software Developer | React | Node | Java - Undergraduate in Computer
            Science at UESB.
          </p>
        </div>

        <div className="flex flex-col text-sm text-gray-80">
          <label>40 repositórios públicos</label>
        </div>
      </div>

      <RepoItems />

      <div className="w-full flex justify-between items-center">
        <p className="text-sm">
          Integrado com a API do <strong>Github</strong>
        </p>
        <Button
          variant="plain"
          size="xs"
          target="_blank"
          href="https://github.com/ricardorodriguespes17"
        >
          Ver mais
          <TbExternalLink />
        </Button>
      </div>
    </BaseSession>
  )
}

export default PortifolioSession
