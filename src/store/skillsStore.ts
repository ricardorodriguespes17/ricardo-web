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
    { label: "React JS", logo: "react", type: "frontend" },
    { label: "Next JS", logo: "next", type: "frontend" },
    { label: "Tailwind CSS", logo: "tailwind", type: "frontend" },
    { label: "Angular JS", logo: "angular", type: "frontend" },
    { label: "Zustand", logo: "zustand", type: "frontend" },
    { label: "Node JS", logo: "node", type: "backend" },
    { label: "Java", logo: "java", type: "backend" },
    { label: "Prisma", logo: "prisma", type: "backend" },
    { label: "Agentes de IA", logo: "ia", type: "backend" },
    { label: "Firebase", logo: "firebase", type: "backend" },
    { label: "Proatividade", type: "interpersonal" },
    { label: "Confiança", type: "interpersonal" },
    { label: "Criatividade", type: "interpersonal" },
    { label: "Vesatilidade", type: "interpersonal" },
    { label: "Facilidade de aprender", type: "interpersonal" },
  ],
  setSkills: (skills) => set({ skills }),
}))

export default useSkills
