"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";
import { useRouter } from "next/navigation";
import { User, AuthResponse } from "@/lib/types";
import { authAPI } from "@/lib/api";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined); // ✅ CORRIGÉ

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const loadUser = useCallback(async () => {
    try {
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("access_token")
          : null;

      if (token) {
        const { data } = await authAPI.getUser();
        setUser(data);
      }
    } catch (error) {
      console.error("Failed to load user", error);
      if (typeof window !== "undefined") {
        localStorage.removeItem("access_token");
      }
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  const login = async (email: string, password: string) => {
    try {
      const { data } = await authAPI.login(email, password);

      if (typeof window !== "undefined") {
        localStorage.setItem("access_token", data.access_token);
      }

      setUser(data.user);
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authAPI.logout();
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      if (typeof window !== "undefined") {
        localStorage.removeItem("access_token");
      }
      setUser(null);
      router.push("/login");
    }
  };

  const value: AuthContextType = {
    user,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
