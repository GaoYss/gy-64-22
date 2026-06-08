from app.data.store import store


class DashboardService:
    def get_summary(self) -> dict:
        return store.summary()


dashboard_service = DashboardService()
