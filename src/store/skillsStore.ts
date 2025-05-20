import { SkillType } from "@/@types/SkillType"
import { create } from "zustand"

type State = {
  skills: SkillType[]
}

type Actions = {
  setSkills: (skills: SkillType[]) => void
}

const useSkills = create<State & Actions>()((set) => ({
  skills: [
    { label: "React", logo: "react", type: "frontend" },
    { label: "React", logo: "react", type: "frontend" },
    { label: "React", logo: "react", type: "backend" },
    { label: "React", logo: "react", type: "backend" },
    { label: "React", logo: "react", type: "interpersonal" },
  ],
  setSkills: (skills) => set({ skills }),
}))

export default useSkills
