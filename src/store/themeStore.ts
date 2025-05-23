import { create } from "zustand"
import { persist } from "zustand/middleware"

type ModeType = "dark" | "light"

type State = {
  themeMode: ModeType
}

type Actions = {
  toggleTheme: () => void
  updateDocumentTheme: () => void
}

const useTheme = create<State & Actions>()(
  persist(
    (set, get) => ({
      themeMode: "light",
      updateDocumentTheme: () => {
        const root = window.document.documentElement
        const themeMode = get().themeMode

        if (themeMode === "dark") root.classList.add("dark")
        else root.classList.remove("dark")
      },
      toggleTheme: () => {
        const newMode = get().themeMode === "dark" ? "light" : "dark"

        set({ themeMode: newMode })
      },
    }),
    {
      name: "theme-storage",
    }
  )
)

export default useTheme
