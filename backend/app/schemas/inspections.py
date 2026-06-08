from datetime import date
from typing import Literal

from pydantic import BaseModel


InspectionResult = Literal["pending", "passed", "整改", "failed"]


class InspectionBase(BaseModel):
    project_id: int
    project_name: str
    inspection_type: str
    scheduled_date: date
    inspector: str
    result: InspectionResult = "pending"
    issues: str = ""


class InspectionCreate(InspectionBase):
    pass


class InspectionUpdate(BaseModel):
    project_id: int | None = None
    project_name: str | None = None
    inspection_type: str | None = None
    scheduled_date: date | None = None
    inspector: str | None = None
    result: InspectionResult | None = None
    issues: str | None = None


class Inspection(InspectionBase):
    id: int
