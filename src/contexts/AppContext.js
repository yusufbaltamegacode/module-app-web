import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children, initialData }) {
  const [data, setData] = useState(initialData || null);

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used inside AppProvider");
  return ctx;
}
