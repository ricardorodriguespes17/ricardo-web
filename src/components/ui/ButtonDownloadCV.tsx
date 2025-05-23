import { TbExternalLink } from "react-icons/tb"
import Button from "./Button"
import data from "@/data"

const ButtonDownloadCV = () => {
  return (
    <Button
      target="_blank"
      size="sm"
      href={data.header.curriculumLink}
      className="w-fit overflow-hidden h-12 text-ellipsis"
    >
      <span className="text-ellipsis text-nowrap flex items-center gap-2">
        {data.header.openCurriculumText} <TbExternalLink size={24} />
      </span>
    </Button>
  )
}

export default ButtonDownloadCV
