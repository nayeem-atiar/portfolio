import { useState } from 'react';

export function useTheme() {
  const [dark, setDark] = useState(true);

  const C = {
    bg:      dark ? "#0C0A09" : "#FAF7F2",
    surface: dark ? "#161210" : "#F0EBE3",
    card:    dark ? "#1C1815" : "#FFFFFF",
    border:  dark ? "#2E2420" : "#DDD5C8",
    text:    dark ? "#F0E8DE" : "#1A1208",
    muted:   dark ? "#8B7B70" : "#7A6B5E",
    accent:  "#F07040",
    accentL: dark ? "rgba(240,112,64,0.12)" : "rgba(240,112,64,0.1)",
  };

  return { dark, setDark, C };
}
