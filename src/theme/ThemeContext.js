import React from 'react';
// Components
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import SetTheme from "./SetTheme.js";

const defaultContextData = {
  light: false,
  toggle: () => {}
};

const ThemeContext = React.createContext(defaultContextData);
const useTheme = () => React.useContext(ThemeContext);

const useEffectThemeSwitch = () => {
  const [themeState, setThemeState] = React.useState({
    light: false,
    hasThemeMounted: false
  });
  React.useEffect(() => {
    const lsLight = localStorage.getItem("light") === "true";
    const lsTheme = localStorage.getItem("Inactive Theme");
    setThemeState({ ...themeState, light: lsLight, lsTheme, hasThemeMounted: true });
  }, []);

  return [themeState, setThemeState];
};

const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useEffectThemeSwitch();

  if (!themeState.hasThemeMounted) {
    return <div />;
  }

  const toggle = () => {
    const light = !themeState.light;
    localStorage.setItem("light", JSON.stringify(light));
    localStorage.setItem("Inactive Theme", light ? 'Switch to Dark Theme' : 'Switch to Light Theme');
    setThemeState({ ...themeState, light });
  };

  const computedTheme = themeState.light ? SetTheme("light") : SetTheme("dark");

  return (
    <MaterialThemeProvider theme={computedTheme}>
      <ThemeContext.Provider
        value={{
          light: themeState.light,
          toggle
        }}
      >
        <CssBaseline />
        {children}
      </ThemeContext.Provider>
    </MaterialThemeProvider>
  );
};

export { ThemeProvider, useTheme };