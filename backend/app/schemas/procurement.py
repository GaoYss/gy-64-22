from datetime import date
from typing import Literal

from pydantic import BaseModel, Field


ProcurementStatus = Literal["pending", "ordered", "delivered", "accepted", "returned"]


class ProcurementBase(BaseModel):
    project_id: int
    project_name: str
    material: str
    supplier: str
    quantity: float = Field(gt=0)
    unit: str
    budget: float = Field(ge=0)
    status: ProcurementStatus = "pending"
    required_date: date


class ProcurementCreate(ProcurementBase):
    pass


class ProcurementUpdate(BaseModel):
    project_id: int | None = None
    project_name: str | None = None
    material: str | None = None
    supplier: str | None = None
    quantity: float | None = Field(default=None, gt=0)
    unit: str | None = None
    budget: float | None = Field(default=None, ge=0)
    status: ProcurementStatus | None = None
    required_date: date | None = None


class Procurement(ProcurementBase):
    id: int
