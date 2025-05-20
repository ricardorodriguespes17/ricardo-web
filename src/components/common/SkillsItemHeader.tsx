import { BsArrowBarDown } from "react-icons/bs"
import Button from "../ui/Button"
import { twMerge } from "tailwind-merge"

type Props = {
  title: string
  icon: React.ReactNode
  isOpen: boolean
  setOpen: () => void
}

const SkillsItemHeader = (props: Props) => {
  return (
    <Button variant="plain" size="full" onClick={props.setOpen}>
      <span className="text-xl">{props.icon}</span>
      <h3>{props.title}</h3>
      <BsArrowBarDown
        className={twMerge(
          "transition-transform duration-700 text-xl",
          props.isOpen ? "rotate-180" : "rotate-0"
        )}
      />
    </Button>
  )
}

export default SkillsItemHeader
