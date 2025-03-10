import { create, StoreApi, UseBoundStore } from "zustand";

interface UseThemeInterface {
    current: string
    toggleTheme: () => void
    setTheme: (someTheme: string) => void
}

enum ThemeOption {
    light = "light", dark = "dark"
}

export const useTheme: UseBoundStore<StoreApi<UseThemeInterface>> = create<UseThemeInterface>((set) => ({
    current: "dark",
    toggleTheme: () => set((state) => ({current: state.current === "light" ? "dark" : "light"})),
    setTheme: (someTheme: string) => set((state) => ({current: someTheme}))
}));

export const GetBackgroundColor = (): string => {
    let {current} = useTheme();
    return current == ThemeOption.light ? "white" : "black"
}

export const GetTextColor = (): string => {
    let {current} = useTheme();
    return current == ThemeOption.light ? "black" : "white"
}