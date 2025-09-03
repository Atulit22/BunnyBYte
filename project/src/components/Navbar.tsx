import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { Code, User, Trophy, BookOpen, LogOut, Settings, Palette } from 'lucide-react';

interface NavbarProps {
  currentView: 'dashboard' | 'learn' | 'profile' | 'leaderboard';
  setCurrentView: (view: 'dashboard' | 'learn' | 'profile' | 'leaderboard') => void;
}

export default function Navbar({ currentView, setCurrentView }: NavbarProps) {
  const { user, logout } = useAuth();
  const { theme, setTheme, colors } = useTheme();
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Code },
    { id: 'learn', label: 'Learn', icon: BookOpen },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
    { id: 'profile', label: 'Profile', icon: User },
  ] as const;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${colors.surface} backdrop-blur-lg border-b border-white/10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <h1 className={`text-xl font-bold ${colors.text}`}>BunnyByte</h1>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentView(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-lg'
                      : `${colors.textSecondary} hover:bg-white/10 hover:text-white`
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-3">
            {/* Theme Selector */}
            <div className="relative">
              <button
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                className={`p-2 rounded-lg ${colors.textSecondary} hover:bg-white/10 hover:text-white transition-all duration-200`}
              >
                <Palette className="w-5 h-5" />
              </button>
              
              {showThemeMenu && (
                <div className={`absolute right-0 mt-2 w-48 ${colors.surface} rounded-lg shadow-2xl border border-white/10 py-2 z-50`}>
                  <button
                    onClick={() => {
                      setTheme('dark');
                      setShowThemeMenu(false);
                    }}
                    className={`w-full px-4 py-2 text-left hover:bg-white/10 transition-all duration-200 ${
                      theme === 'dark' ? colors.text : colors.textSecondary
                    }`}
                  >
                    🌙 Dark Theme
                  </button>
                  <button
                    onClick={() => {
                      setTheme('light');
                      setShowThemeMenu(false);
                    }}
                    className={`w-full px-4 py-2 text-left hover:bg-white/10 transition-all duration-200 ${
                      theme === 'light' ? colors.text : colors.textSecondary
                    }`}
                  >
                    ☀️ Light Theme
                  </button>
                  <button
                    onClick={() => {
                      setTheme('cyberpunk');
                      setShowThemeMenu(false);
                    }}
                    className={`w-full px-4 py-2 text-left hover:bg-white/10 transition-all duration-200 ${
                      theme === 'cyberpunk' ? colors.text : colors.textSecondary
                    }`}
                  >
                    🔮 Cyberpunk
                  </button>
                </div>
              )}
            </div>

            {/* User Info */}
            <div className="flex items-center space-x-3">
              <div className="hidden sm:block text-right">
                <div className={`text-sm font-medium ${colors.text}`}>
                  {user?.fullName}
                </div>
                <div className={`text-xs ${colors.textSecondary}`}>
                  @{user?.username}
                </div>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  {user?.fullName.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={logout}
              className={`p-2 rounded-lg ${colors.textSecondary} hover:bg-red-500/20 hover:text-red-400 transition-all duration-200`}
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-white/10">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-500 to-violet-500 text-white'
                    : `${colors.textSecondary} hover:text-white`
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}