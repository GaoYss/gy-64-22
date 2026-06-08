import { DataTable } from "../components/DataTable.jsx";
import { RecordForm } from "../components/RecordForm.jsx";
import { StatusBadge } from "../components/StatusBadge.jsx";
import { useAppData } from "../context/AppContext.jsx";
import { appointmentFields } from "../modules/forms.js";

const columns = [
  { key: "customer_name", label: "Customer" },
  { key: "address", label: "Address" },
  { key: "scheduled_at", label: "Time", render: (row) => new Date(row.scheduled_at).toLocaleString() },
  { key: "designer", label: "Designer" },
  { key: "surveyor", label: "Surveyor" },
  { key: "status", label: "Status", render: (row) => <StatusBadge value={row.status} /> },
  { key: "requirements", label: "Requirements" },
];

export function AppointmentsPage() {
  const { appointments, createRecord } = useAppData();

  return (
    <div className="page-stack">
      <RecordForm
        title="Book measurement"
        fields={appointmentFields}
        onSubmit={(payload) => createRecord("appointments", payload)}
      />
      <section className="panel">
        <div className="section-heading">
          <h2>Measurement Schedule</h2>
          <span>{appointments.filter((item) => item.status === "scheduled").length} upcoming</span>
        </div>
        <DataTable columns={columns} rows={appointments} />
      </section>
    </div>
  );
}
