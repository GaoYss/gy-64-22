import { DataTable } from "../components/DataTable.jsx";
import { RecordForm } from "../components/RecordForm.jsx";
import { StatusBadge } from "../components/StatusBadge.jsx";
import { useAppData } from "../context/AppContext.jsx";
import { customerFields } from "../modules/forms.js";

const columns = [
  { key: "name", label: "Customer" },
  { key: "phone", label: "Phone" },
  { key: "community", label: "Community" },
  { key: "house_type", label: "House" },
  { key: "budget", label: "Budget", render: (row) => `CNY ${Number(row.budget).toLocaleString()}` },
  { key: "status", label: "Status", render: (row) => <StatusBadge value={row.status} /> },
  { key: "owner", label: "Owner" },
  { key: "reported_at", label: "Reported" },
];

export function CustomersPage() {
  const { customers, createRecord } = useAppData();

  return (
    <div className="page-stack">
      <RecordForm title="Report customer" fields={customerFields} onSubmit={(payload) => createRecord("customers", payload)} />
      <section className="panel">
        <div className="section-heading">
          <h2>Customer Reports</h2>
          <span>{customers.length} records</span>
        </div>
        <DataTable columns={columns} rows={customers} />
      </section>
    </div>
  );
}
