import React, { createContext, useState, useContext } from "react";

// Створюємо контекст теми
const ThemeContext = createContext();

// Функціональний компонент, який буде обгорткою для наших компонентів
export function ThemeProvider({ children }) {
  // Стан теми: за замовчуванням світла тема
  const [darkMode, setDarkMode] = useState(false);

  // Функція для зміни теми
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Повертаємо провайдер контексту зі значенням теми та функцією зміни теми
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Кастомний хук для зручного використання контексту теми
export function useTheme() {
  return useContext(ThemeContext);
}
