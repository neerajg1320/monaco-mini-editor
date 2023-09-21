import React, { useContext, useState } from "react";
import { ThemeType, Theme } from "./Theme.model";
import { THEMES } from "./Theme.config";

interface ThemeContextProps {
  themeType: ThemeType;
  theme: Theme;
  setCurrentTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  settingButton: boolean;
  setSettingButton: React.Dispatch<React.SetStateAction<boolean>>
}

export const ThemeContext = React.createContext<ThemeContextProps>({
    themeType: 'normal',
    theme: THEMES['normal'],
} as ThemeContextProps);

export const ThemeProvider = ({ children }: {children: React.ReactNode} ) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>("normal");
  const [settingButton, setSettingButton] = useState<boolean>(false);

  return (
    <ThemeContext.Provider
      value={{
        themeType: currentTheme,
        theme: THEMES[currentTheme],
        setCurrentTheme,
        settingButton,
        setSettingButton
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = ()=>useContext(ThemeContext);

