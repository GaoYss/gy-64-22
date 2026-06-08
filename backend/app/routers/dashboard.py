from fastapi import APIRouter

from app.schemas.dashboard import DashboardSummary
from app.services.dashboard import dashboard_service

router = APIRouter(prefix="/api/dashboard", tags=["dashboard"])


@router.get("/summary", response_model=DashboardSummary)
def get_summary() -> dict:
    return dashboard_service.get_summary()
