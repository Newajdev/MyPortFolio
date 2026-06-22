import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  fetchAdminProfile,
  loginAdmin,
  logoutAdmin,
  registerAdmin,
} from "../services/adminService";
import { getAuthToken } from "../services/api";

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const refreshUser = useCallback(async () => {
    const token = getAuthToken();
    if (!token) {
      setUser(null);
      return null;
    }

    const profile = await fetchAdminProfile();
    setUser(profile);
    return profile;
  }, []);

  useEffect(() => {
    refreshUser()
      .catch(() => {
        logoutAdmin();
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, [refreshUser]);

  const login = async (credentials) => {
    const profile = await loginAdmin(credentials);
    setUser(profile);
    return profile;
  };

  const register = async (credentials) => {
    const profile = await registerAdmin(credentials);
    setUser(profile);
    return profile;
  };

  const logout = () => {
    logoutAdmin();
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      loading,
      isAuthenticated: Boolean(user),
      login,
      register,
      logout,
      refreshUser,
    }),
    [user, loading, refreshUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
