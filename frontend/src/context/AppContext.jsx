import { createContext, useContext, useEffect, useMemo, useState } from "react";

import {
  appointmentApi,
  customerApi,
  dashboardApi,
  inspectionApi,
  procurementApi,
  projectApi,
} from "../api/modules.js";

const AppContext = createContext(null);

const apiMap = {
  customers: customerApi,
  appointments: appointmentApi,
  projects: projectApi,
  procurements: procurementApi,
  inspections: inspectionApi,
};

export function AppProvider({ children }) {
  const [state, setState] = useState({
    dashboard: null,
    customers: [],
    appointments: [],
    projects: [],
    procurements: [],
    inspections: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function refresh() {
    setLoading(true);
    setError("");
    try {
      const [dashboard, customers, appointments, projects, procurements, inspections] = await Promise.all([
        dashboardApi.summary(),
        customerApi.list(),
        appointmentApi.list(),
        projectApi.list(),
        procurementApi.list(),
        inspectionApi.list(),
      ]);
      setState({ dashboard, customers, appointments, projects, procurements, inspections });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function createRecord(module, payload) {
    const created = await apiMap[module].create(payload);
    setState((current) => ({ ...current, [module]: [...current[module], created] }));
    return created;
  }

  async function updateRecord(module, id, payload) {
    const updated = await apiMap[module].update(id, payload);
    setState((current) => ({
      ...current,
      [module]: current[module].map((item) => (item.id === id ? updated : item)),
    }));
    return updated;
  }

  useEffect(() => {
    refresh();
  }, []);

  const value = useMemo(
    () => ({ ...state, loading, error, refresh, createRecord, updateRecord }),
    [state, loading, error],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppData() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppData must be used within AppProvider");
  }
  return context;
}
