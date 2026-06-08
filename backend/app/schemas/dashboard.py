from typing import Any

from pydantic import BaseModel


class DashboardSummary(BaseModel):
    generated_at: str
    metrics: list[dict[str, Any]]
    procurement_budget: float
    phase_distribution: list[dict[str, Any]]
    recent_updates: list[dict[str, Any]]
