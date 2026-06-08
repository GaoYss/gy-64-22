import { Building2, RefreshCw } from "lucide-react";

import { useAppData } from "../context/AppContext.jsx";
import { MODULES } from "../modules/navigation.js";

export function Layout({ activeModule, onModuleChange, children }) {
  const { loading, error, refresh } = useAppData();

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <Building2 size={26} />
          <div>
            <strong>Decoration PM</strong>
            <span>Project operations</span>
          </div>
        </div>
        <nav className="nav-list" aria-label="Application modules">
          {MODULES.map((module) => {
            const Icon = module.icon;
            return (
              <button
                key={module.id}
                className={activeModule === module.id ? "nav-item active" : "nav-item"}
                onClick={() => onModuleChange(module.id)}
                type="button"
              >
                <Icon size={18} />
                <span>{module.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>
      <main className="main-content">
        <header className="topbar">
          <div>
            <span className="eyebrow">Renovation delivery workspace</span>
            <h1>{MODULES.find((module) => module.id === activeModule)?.label}</h1>
          </div>
          <button className="icon-button" onClick={refresh} type="button" title="Refresh data">
            <RefreshCw size={18} className={loading ? "spin" : ""} />
          </button>
        </header>
        {error ? <div className="alert">{error}</div> : null}
        {loading ? <div className="loading">Loading workspace data...</div> : children}
      </main>
    </div>
  );
}
