import { TbExternalLink } from "react-icons/tb"
import Button from "./Button"
import data from "@/data"

const ButtonDownloadCV = () => {
  return (
    <Button target="_blank" size="sm" href={data.header.curriculumLink}>
      {data.header.openCurriculumText} <TbExternalLink size={24} />
    </Button>
  )
}

export default ButtonDownloadCV
