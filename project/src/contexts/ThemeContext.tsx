import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  theme: 'light' | 'dark' | 'cyberpunk';
  setTheme: (theme: 'light' | 'dark' | 'cyberpunk') => void;
  colors: ThemeColors;
}

interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  success: string;
  warning: string;
  error: string;
}

const themes: Record<string, ThemeColors> = {
  dark: {
    primary: '#00D4FF',
    secondary: '#FF6B6B',
    accent: '#4ECDC4',
    background: 'from-slate-900 via-purple-900 to-slate-900',
    surface: 'bg-slate-800/50 backdrop-blur-lg',
    text: 'text-white',
    textSecondary: 'text-slate-300',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444'
  },
  light: {
    primary: '#0EA5E9',
    secondary: '#EC4899',
    accent: '#06B6D4',
    background: 'from-blue-50 via-purple-50 to-pink-50',
    surface: 'bg-white/80 backdrop-blur-lg',
    text: 'text-gray-900',
    textSecondary: 'text-gray-600',
    success: '#059669',
    warning: '#D97706',
    error: '#DC2626'
  },
  cyberpunk: {
    primary: '#FF0080',
    secondary: '#00FF80',
    accent: '#8000FF',
    background: 'from-black via-purple-900 to-black',
    surface: 'bg-black/70 backdrop-blur-lg border border-pink-500/20',
    text: 'text-green-400',
    textSecondary: 'text-pink-300',
    success: '#00FF00',
    warning: '#FFFF00',
    error: '#FF0000'
  }
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<'light' | 'dark' | 'cyberpunk'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('bunnybyte_theme') as 'light' | 'dark' | 'cyberpunk';
    if (savedTheme) {
      setThemeState(savedTheme);
    }
  }, []);

  const setTheme = (newTheme: 'light' | 'dark' | 'cyberpunk') => {
    setThemeState(newTheme);
    localStorage.setItem('bunnybyte_theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme,
      colors: themes[theme]
    }}>
      {children}
    </ThemeContext.Provider>
  );
};