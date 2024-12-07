import { create } from "zustand"
import { persist } from "zustand/middleware"

type ModeType = "dark" | "light"

type State = {
  themeMode: ModeType
}

type Actions = {
  toggleTheme: () => void
}

const useTheme = create<State & Actions>()(
  persist(
    (set, get) => ({
      themeMode: "light",
      toggleTheme: () => {
        const newMode = get().themeMode === "dark" ? "light" : "dark"

        const root = window.document.documentElement
        if (newMode === "dark") root.classList.add("dark")
        else root.classList.remove("dark")

        set({ themeMode: newMode })
      },
    }),
    {
      name: "theme-storage",
    }
  )
)

export default useTheme
