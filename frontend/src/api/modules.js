import { api } from "./client.js";

export const dashboardApi = {
  summary: () => api.get("/dashboard/summary"),
};

export const customerApi = {
  list: () => api.get("/customers"),
  create: (payload) => api.post("/customers", payload),
  update: (id, payload) => api.patch(`/customers/${id}`, payload),
};

export const appointmentApi = {
  list: () => api.get("/appointments"),
  create: (payload) => api.post("/appointments", payload),
  update: (id, payload) => api.patch(`/appointments/${id}`, payload),
};

export const projectApi = {
  list: () => api.get("/projects"),
  create: (payload) => api.post("/projects", payload),
  update: (id, payload) => api.patch(`/projects/${id}`, payload),
};

export const procurementApi = {
  list: () => api.get("/procurements"),
  create: (payload) => api.post("/procurements", payload),
  update: (id, payload) => api.patch(`/procurements/${id}`, payload),
};

export const inspectionApi = {
  list: () => api.get("/inspections"),
  create: (payload) => api.post("/inspections", payload),
  update: (id, payload) => api.patch(`/inspections/${id}`, payload),
};
