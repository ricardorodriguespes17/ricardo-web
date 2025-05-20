import Image from "next/image"

type Props = {
  label: string
  src: string
}

const SkillsItemLogo = (props: Props) => {
  return (
    <Image src={props.src} alt={`Ícone de ${props.label}`} className="w-8" />
  )
}

export default SkillsItemLogo
