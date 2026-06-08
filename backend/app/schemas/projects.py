from datetime import date
from typing import Literal

from pydantic import BaseModel, Field


ProjectPhase = Literal["design", "demolition", "plumbing", "waterproofing", "carpentry", "finishing", "completed"]
RiskLevel = Literal["low", "medium", "high"]


class ProjectBase(BaseModel):
    customer_name: str
    project_name: str
    manager: str
    phase: ProjectPhase = "design"
    progress: int = Field(ge=0, le=100)
    start_date: date
    expected_finish: date
    risk_level: RiskLevel = "low"
    latest_update: str = ""


class ProjectCreate(ProjectBase):
    pass


class ProjectUpdate(BaseModel):
    customer_name: str | None = None
    project_name: str | None = None
    manager: str | None = None
    phase: ProjectPhase | None = None
    progress: int | None = Field(default=None, ge=0, le=100)
    start_date: date | None = None
    expected_finish: date | None = None
    risk_level: RiskLevel | None = None
    latest_update: str | None = None


class Project(ProjectBase):
    id: int
