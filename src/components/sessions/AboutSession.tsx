import Image from "next/image"
import BaseSession from "../layout/BaseSession"
import AboutImg from "@/assets/about.jpg"
import ButtonDownloadCV from "../ui/ButtonDownloadCV"
import data from "@/data"

const { title, paragraphs, birthdate, location } = data.about

const calculateAge = () => {
  const diff = Date.now() - new Date(birthdate).getTime()
  const age = new Date(diff).getUTCFullYear() - 1970
  return age
}

const AboutSession = () => {
  const age = calculateAge()

  return (
    <BaseSession id="about">
      <div className="flex w-full flex-col items-center lg:flex-row gap-20">
        <div className="max-w-[400px] h-fit relative">
          <div className="bg-dark-90 dark:bg-blue-dark w-full h-[95%] absolute z-[1]" />

          <Image
            src={AboutImg}
            alt="Foto de Ricardo Rodrigues com um moletom preto escrito Computação"
            className="ml-4 mt-4 w-full relative z-[2]"
          />
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <h2>{title}</h2>

          <div className="flex flex-col gap-2 h-full">
            <p>
              Tenho {age} anos, moro em {location}. Estou finalizando o curso de
              Ciência da Computação na UESB
            </p>
            {paragraphs.map((item, index) => (
              <p key={`paragraph-${index}`}>{item}</p>
            ))}
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
