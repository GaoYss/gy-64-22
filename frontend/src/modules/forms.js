export const customerFields = [
  { name: "name", label: "Customer", type: "text" },
  { name: "phone", label: "Phone", type: "text" },
  { name: "community", label: "Community", type: "text" },
  { name: "house_type", label: "House type", type: "text" },
  { name: "source", label: "Source", type: "text" },
  { name: "budget", label: "Budget", type: "number" },
  { name: "reported_at", label: "Report date", type: "date" },
  { name: "owner", label: "Owner", type: "text" },
  { name: "status", label: "Status", type: "select", options: ["new", "contacted", "measured", "quoted", "signed", "lost"] },
  { name: "notes", label: "Notes", type: "textarea" },
];

export const appointmentFields = [
  { name: "customer_id", label: "Customer ID", type: "number" },
  { name: "customer_name", label: "Customer", type: "text" },
  { name: "address", label: "Address", type: "text" },
  { name: "scheduled_at", label: "Scheduled time", type: "datetime-local" },
  { name: "designer", label: "Designer", type: "text" },
  { name: "surveyor", label: "Surveyor", type: "text" },
  { name: "status", label: "Status", type: "select", options: ["scheduled", "completed", "cancelled"] },
  { name: "requirements", label: "Requirements", type: "textarea" },
];

export const projectFields = [
  { name: "customer_name", label: "Customer", type: "text" },
  { name: "project_name", label: "Project", type: "text" },
  { name: "manager", label: "Manager", type: "text" },
  { name: "phase", label: "Phase", type: "select", options: ["design", "demolition", "plumbing", "waterproofing", "carpentry", "finishing", "completed"] },
  { name: "progress", label: "Progress", type: "number" },
  { name: "start_date", label: "Start date", type: "date" },
  { name: "expected_finish", label: "Expected finish", type: "date" },
  { name: "risk_level", label: "Risk", type: "select", options: ["low", "medium", "high"] },
  { name: "latest_update", label: "Latest update", type: "textarea" },
];

export const procurementFields = [
  { name: "project_id", label: "Project ID", type: "number" },
  { name: "project_name", label: "Project", type: "text" },
  { name: "material", label: "Material", type: "text" },
  { name: "supplier", label: "Supplier", type: "text" },
  { name: "quantity", label: "Quantity", type: "number" },
  { name: "unit", label: "Unit", type: "text" },
  { name: "budget", label: "Budget", type: "number" },
  { name: "status", label: "Status", type: "select", options: ["pending", "ordered", "delivered", "accepted", "returned"] },
  { name: "required_date", label: "Required date", type: "date" },
];

export const inspectionFields = [
  { name: "project_id", label: "Project ID", type: "number" },
  { name: "project_name", label: "Project", type: "text" },
  { name: "inspection_type", label: "Type", type: "text" },
  { name: "scheduled_date", label: "Scheduled date", type: "date" },
  { name: "inspector", label: "Inspector", type: "text" },
  { name: "result", label: "Result", type: "select", options: ["pending", "passed", "整改", "failed"] },
  { name: "issues", label: "Issues", type: "textarea" },
];
