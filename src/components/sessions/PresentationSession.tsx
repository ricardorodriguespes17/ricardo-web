import { HiOutlineLocationMarker } from "react-icons/hi"
import ProfileImage from "../common/ProfileImage"
import { TbPointFilled } from "react-icons/tb"
import Point from "../common/Point"
import Button from "../ui/Button"

const PresentationSession = () => {
  return (
    <div className="h-screen w-full px-40 flex items-center">
      <div className="flex">
        <div className="flex flex-1 flex-col justify-center gap-6">
          <div className="flex flex-col gap-1">
            <h1 className="dark:text-green-dark">Ricardo Rodrigues</h1>
            <p className="text-gray-80 dark:text-green-light">
              Desenvolvedor Fullstack
            </p>
          </div>

          <p>
            Apaixonado por Javascript e desenvolvimento de aplicações. Gosto de
            solucionar problemas usando programação. Muito curioso, sempre estou
            rastreando as novas tecnologias na área.
          </p>

          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-1">
              <HiOutlineLocationMarker /> Vitória da Conquista / BA - Brasil
            </label>

            <label className="flex items-center gap-2">
              <Point />
              Disponível para novos projetos
            </label>
          </div>

          <Button
            href="#contato"
            className="hover:bg-green-light hover:text-dark-100"
          >
            Entre em contato
          </Button>
        </div>

        <div className="flex items-center justify-end pl-24">
          <ProfileImage />
        </div>
      </div>
    </div>
  )
}

export default PresentationSession
