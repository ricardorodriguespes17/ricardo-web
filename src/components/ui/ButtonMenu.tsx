import { IoIosMenu } from "react-icons/io"
import Button from "./Button"

type Props = {
  onClick?: () => void
}

const ButtonMenu = (props: Props) => {
  return (
    <Button
      variant="plain"
      className="visible md:invisible"
      onClick={props.onClick}
    >
      <IoIosMenu size={40} />
    </Button>
  )
}

export default ButtonMenu
