import { useState } from "react";

import { Layout } from "./components/Layout.jsx";
import { AppProvider } from "./context/AppContext.jsx";
import { MODULES } from "./modules/navigation.js";
import { AppointmentsPage } from "./pages/AppointmentsPage.jsx";
import { CustomersPage } from "./pages/CustomersPage.jsx";
import { DashboardPage } from "./pages/DashboardPage.jsx";
import { InspectionsPage } from "./pages/InspectionsPage.jsx";
import { ProcurementPage } from "./pages/ProcurementPage.jsx";
import { ProjectsPage } from "./pages/ProjectsPage.jsx";

const pages = {
  dashboard: DashboardPage,
  customers: CustomersPage,
  appointments: AppointmentsPage,
  projects: ProjectsPage,
  procurement: ProcurementPage,
  inspections: InspectionsPage,
};

export default function App() {
  const [activeModule, setActiveModule] = useState(MODULES[0].id);
  const Page = pages[activeModule];

  return (
    <AppProvider>
      <Layout activeModule={activeModule} onModuleChange={setActiveModule}>
        <Page />
      </Layout>
    </AppProvider>
  );
}
