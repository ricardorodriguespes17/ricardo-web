import SkillsList from "../common/SkillsList"
import BaseSession from "../layout/BaseSession"

const SkillsSession = () => {
  return (
    <BaseSession>
      <h2 className="mb-4">Habilidades</h2>

      <div className="w-full grid grid-cols-3 gap-4">
        <SkillsList type="frontend" />
        <SkillsList type="backend" />
        <SkillsList type="softs" />
      </div>
    </BaseSession>
  )
}

export default SkillsSession