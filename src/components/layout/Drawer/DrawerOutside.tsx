import { twMerge } from "tailwind-merge"

type Props = {
  isOpen: boolean
  onClose: () => void
}

const DrawerOutside = (props: Props) => {
  return (
    <div
      className={twMerge(
        "flex-1 h-full bg-black/30 transition-all duration-300",
        !props.isOpen && "bg-transparent"
      )}
      onClick={props.onClose}
    />
  )
}

export default DrawerOutside
