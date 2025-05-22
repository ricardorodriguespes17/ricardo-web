import { create } from "zustand"

type State = {
  typeSelected: string
}

type Actions = {
  setTypeSelected: (type: string) => void
}

const useCareer = create<State & Actions>()((set, get) => ({
  typeSelected: "professional",
  setTypeSelected: (type) => set({ typeSelected: type }),
}))

export default useCareer
