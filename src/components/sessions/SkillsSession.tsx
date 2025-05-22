import data from "@/data"
import SkillsList from "../common/SkillsList"
import BaseSession from "../layout/BaseSession"

const SkillsSession = () => {
  return (
    <BaseSession id="skills">
      <h2 className="mb-4">{data.skills.title}</h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <SkillsList type="frontend" />
        <SkillsList type="backend" />
        <SkillsList type="interpersonal" />
      </div>
    </BaseSession>
  )
}

export default SkillsSession
