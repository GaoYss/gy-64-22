import { DataTable } from "../components/DataTable.jsx";
import { RecordForm } from "../components/RecordForm.jsx";
import { StatusBadge } from "../components/StatusBadge.jsx";
import { useAppData } from "../context/AppContext.jsx";
import { procurementFields } from "../modules/forms.js";

const columns = [
  { key: "project_name", label: "Project" },
  { key: "material", label: "Material" },
  { key: "supplier", label: "Supplier" },
  { key: "quantity", label: "Qty", render: (row) => `${row.quantity} ${row.unit}` },
  { key: "budget", label: "Budget", render: (row) => `CNY ${Number(row.budget).toLocaleString()}` },
  { key: "status", label: "Status", render: (row) => <StatusBadge value={row.status} /> },
  { key: "required_date", label: "Required" },
];

export function ProcurementPage() {
  const { procurements, createRecord } = useAppData();
  const totalBudget = procurements.reduce((sum, item) => sum + Number(item.budget), 0);

  return (
    <div className="page-stack">
      <RecordForm
        title="Add purchase"
        fields={procurementFields}
        onSubmit={(payload) => createRecord("procurements", payload)}
      />
      <section className="panel">
        <div className="section-heading">
          <h2>Material Procurement</h2>
          <span>CNY {totalBudget.toLocaleString()}</span>
        </div>
        <DataTable columns={columns} rows={procurements} />
      </section>
    </div>
  );
}
