import Image from "next/image"
import BaseSession from "../layout/BaseSession"
import AboutImg from "@/assets/about.jpg"
import Button from "../ui/Button"
import ButtonDownloadCV from "../ui/ButtonDownloadCV"

const calculateAge = () => {
  const diff = Date.now() - new Date("1999-05-28").getTime()
  const age = new Date(diff).getUTCFullYear() - 1970
  return age
}

const AboutSession = () => {
  const age = calculateAge()

  return (
    <BaseSession>
      <div className="flex w-full gap-20">
        <div className="w-[500px] flex-1 relative">
          <div className="bg-dark-90 w-[95%] h-[90%] absolute z-[1]" />

          <Image
            src={AboutImg}
            alt="Foto de Ricardo Rodrigues com um moletom preto escrito Computação"
            className="mt-4 ml-4 w-full relative z-[2]"
          />
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <h2>Um pouco sobre mim...</h2>

          <div className="flex flex-col gap-2 h-full">
            <p>
              Tenho {age} anos, moro em Vitória da Conquista, na Bahia. Estou
              cursando Ciência da Computação na UESB
            </p>
            <p>
              Estou em busca de novos desafios na área da programação,
              contribuindo cada vez mais para o avanço da tecnologia da
              informação, pois acredito que isso tende a mudar cada vez mais o
              mundo para melhor.
            </p>
          </div>

          <div className="flex items-end flex-1">
            <ButtonDownloadCV />
          </div>
        </div>
      </div>
    </BaseSession>
  )
}

export default AboutSession
