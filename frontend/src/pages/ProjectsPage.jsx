import { DataTable } from "../components/DataTable.jsx";
import { ProgressBar } from "../components/ProgressBar.jsx";
import { RecordForm } from "../components/RecordForm.jsx";
import { StatusBadge } from "../components/StatusBadge.jsx";
import { useAppData } from "../context/AppContext.jsx";
import { projectFields } from "../modules/forms.js";

const columns = [
  { key: "project_name", label: "Project" },
  { key: "customer_name", label: "Customer" },
  { key: "manager", label: "Manager" },
  { key: "phase", label: "Phase", render: (row) => <StatusBadge value={row.phase} /> },
  { key: "progress", label: "Progress", render: (row) => <ProgressBar value={row.progress} /> },
  { key: "risk_level", label: "Risk", render: (row) => <StatusBadge value={row.risk_level} /> },
  { key: "expected_finish", label: "Finish" },
  { key: "latest_update", label: "Latest update" },
];

export function ProjectsPage() {
  const { projects, createRecord } = useAppData();

  return (
    <div className="page-stack">
      <RecordForm title="Create project" fields={projectFields} onSubmit={(payload) => createRecord("projects", payload)} />
      <section className="panel">
        <div className="section-heading">
          <h2>Construction Progress</h2>
          <span>{projects.filter((project) => project.progress < 100).length} active</span>
        </div>
        <DataTable columns={columns} rows={projects} />
      </section>
    </div>
  );
}
