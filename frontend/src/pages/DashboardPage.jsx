import { CalendarClock, CircleDollarSign, ClipboardList, TrendingUp } from "lucide-react";

import { ProgressBar } from "../components/ProgressBar.jsx";
import { StatusBadge } from "../components/StatusBadge.jsx";
import { useAppData } from "../context/AppContext.jsx";

const metricIcons = [ClipboardList, CalendarClock, TrendingUp, CircleDollarSign];

export function DashboardPage() {
  const { dashboard } = useAppData();

  if (!dashboard) return null;

  return (
    <div className="page-stack">
      <section className="metric-grid">
        {dashboard.metrics.map((metric, index) => {
          const Icon = metricIcons[index] ?? TrendingUp;
          return (
            <article className="metric-card" key={metric.label}>
              <Icon size={20} />
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <small>{metric.trend}</small>
            </article>
          );
        })}
      </section>

      <section className="dashboard-grid">
        <div className="panel">
          <div className="section-heading">
            <h2>Construction Updates</h2>
            <span>Budget CNY {dashboard.procurement_budget.toLocaleString()}</span>
          </div>
          <div className="update-list">
            {dashboard.recent_updates.map((item) => (
              <article key={item.project_name} className="update-row">
                <div>
                  <strong>{item.project_name}</strong>
                  <p>{item.latest_update}</p>
                </div>
                <StatusBadge value={item.phase} />
                <ProgressBar value={item.progress} />
              </article>
            ))}
          </div>
        </div>
        <div className="panel">
          <div className="section-heading">
            <h2>Phase Load</h2>
            <span>{new Date(dashboard.generated_at).toLocaleString()}</span>
          </div>
          <div className="phase-list">
            {dashboard.phase_distribution.map((item) => (
              <div key={item.phase} className="phase-row">
                <span>{item.phase}</span>
                <strong>{item.count}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
