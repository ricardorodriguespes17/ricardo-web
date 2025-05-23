import Button from "@/components/ui/Button"
import ButtonDownloadCV from "@/components/ui/ButtonDownloadCV"
import ButtonMenu from "@/components/ui/ButtonMenu"
import ButtonTheme from "@/components/ui/ButtonTheme"
import data from "@/data"
import { twMerge } from "tailwind-merge"

type Props = {
  isOpen: boolean
  setOpen: (value: boolean) => void
}

const DrawerContent = ({ isOpen, setOpen }: Props) => {
  return (
    <div
      className={twMerge(
        "flex flex-col p-4 gap-3 w-fit h-full bg-white dark:bg-dark-90",
        "overflow-hidden md:invisible transition-colors",
        !isOpen && "bg-transparent"
      )}
    >
      <ButtonMenu onClick={() => setOpen(!isOpen)} />

      <div
        className={twMerge(
          "flex flex-col gap-3 w-[300px] transition-all duration-500 overflow-hidden relative",
          !isOpen && "w-0 opacity-0"
        )}
      >
        {data.header.links.map((item, index) => (
          <Button
            key={index}
            href={`#${item.link}`}
            target="_self"
            size="sm"
            variant="plain"
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Button>
        ))}
        <ButtonDownloadCV />
        <div className="flex flex-1 items-end fixed bottom-1 left-0">
          <ButtonTheme />
        </div>
      </div>
    </div>
  )
}

export default DrawerContent
