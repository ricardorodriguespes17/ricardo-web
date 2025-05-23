import { twMerge } from "tailwind-merge"

type Props = {
  isOpen: boolean
  onClose: () => void
}

const DrawerOutside = (props: Props) => {
  return (
    <div
      className={twMerge(
        "flex-1 h-full bg-black/30 dark:bg-blue-dark/10 transition-all duration-300",
        !props.isOpen && "bg-transparent dark:bg-transparent"
      )}
      onClick={props.onClose}
    />
  )
}

export default DrawerOutside
