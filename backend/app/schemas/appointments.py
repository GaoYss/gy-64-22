from datetime import datetime
from typing import Literal

from pydantic import BaseModel, Field


AppointmentStatus = Literal["scheduled", "completed", "cancelled"]


class AppointmentBase(BaseModel):
    customer_id: int
    customer_name: str
    address: str
    scheduled_at: datetime
    designer: str
    surveyor: str
    status: AppointmentStatus = "scheduled"
    requirements: str = ""


class AppointmentCreate(AppointmentBase):
    pass


class AppointmentUpdate(BaseModel):
    customer_id: int | None = None
    customer_name: str | None = None
    address: str | None = None
    scheduled_at: datetime | None = None
    designer: str | None = None
    surveyor: str | None = None
    status: AppointmentStatus | None = None
    requirements: str | None = None


class Appointment(AppointmentBase):
    id: int
