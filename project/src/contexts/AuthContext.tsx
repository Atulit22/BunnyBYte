import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (userData: SignupData) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

interface SignupData {
  fullName: string;
  username: string;
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('bunnybyte_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check against stored users (demo implementation)
    const users = JSON.parse(localStorage.getItem('bunnybyte_users') || '[]');
    const foundUser = users.find((u: any) => u.email === email && u.password === password);
    
    if (foundUser) {
      const userSession = {
        id: foundUser.id,
        username: foundUser.username,
        email: foundUser.email,
        fullName: foundUser.fullName,
        joinDate: foundUser.joinDate
      };
      setUser(userSession);
      localStorage.setItem('bunnybyte_user', JSON.stringify(userSession));
      setLoading(false);
      return true;
    }
    
    setLoading(false);
    return false;
  };

  const signup = async (userData: SignupData): Promise<boolean> => {
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('bunnybyte_users') || '[]');
    const existingUser = users.find((u: any) => u.email === userData.email || u.username === userData.username);
    
    if (existingUser) {
      setLoading(false);
      return false;
    }
    
    // Create new user
    const newUser = {
      ...userData,
      id: `user_${Date.now()}`,
      joinDate: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('bunnybyte_users', JSON.stringify(users));
    
    // Auto login
    const userSession = {
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      fullName: newUser.fullName,
      joinDate: newUser.joinDate
    };
    setUser(userSession);
    localStorage.setItem('bunnybyte_user', JSON.stringify(userSession));
    
    setLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('bunnybyte_user');
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      login,
      signup,
      logout,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  );
};