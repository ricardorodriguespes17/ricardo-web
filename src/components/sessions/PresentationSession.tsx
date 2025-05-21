import { HiOutlineLocationMarker } from "react-icons/hi"
import ProfileImage from "../common/ProfileImage"
import Point from "../common/Point"
import Button from "../ui/Button"

const PresentationSession = () => {
  return (
    <div className="min-h-screen h-fit w-full px-8 sm:px-16 md:px-24 lg:px-32 flex items-center">
      <div className="flex flex-col-reverse md:flex-row items-center h-fit w-full">
        <div className="flex flex-1 flex-col justify-center items-center md:items-start gap-3 md:gap-6">
          <div className="flex flex-col gap-1 items-center md:items-start">
            <h1 className="dark:text-blue-dark">Ricardo Rodrigues</h1>
            <p className="text-gray-80 dark:text-blue-light">
              Desenvolvedor Fullstack
            </p>
          </div>

          <p className="text-center md:text-start text-sm lg:text-base">
            Apaixonado por Javascript e desenvolvimento de aplicações. Gosto de
            solucionar problemas usando programação. Muito curioso, sempre estou
            rastreando as novas tecnologias na área.
          </p>

          <div className="flex flex-col gap-2 items-center md:items-start text-sm lg:text-base">
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
            className="hover:bg-blue-light hover:text-dark-100"
          >
            Entre em contato
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
