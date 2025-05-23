import { create } from "zustand"

export type AlertType = {
  title?: string
  content: string
}

type State = {
  alert?: AlertType
}

type Actions = {
  showAlert: (alert: AlertType) => void
  clearAlert: () => void
}

const useAlert = create<State & Actions>()((set) => ({
  alert: undefined,
  showAlert: (alert) => set({ alert }),
  clearAlert: () => set({ alert: undefined }),
}))

export default useAlert
