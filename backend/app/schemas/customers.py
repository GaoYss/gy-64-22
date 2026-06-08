from datetime import date
from typing import Literal

from pydantic import BaseModel, Field


CustomerStatus = Literal["new", "contacted", "measured", "quoted", "signed", "lost"]


class CustomerBase(BaseModel):
    name: str = Field(min_length=1)
    phone: str = Field(min_length=6)
    community: str
    house_type: str
    source: str
    budget: float = Field(ge=0)
    status: CustomerStatus = "new"
    reported_at: date
    owner: str
    notes: str = ""


class CustomerCreate(CustomerBase):
    pass


class CustomerUpdate(BaseModel):
    name: str | None = None
    phone: str | None = None
    community: str | None = None
    house_type: str | None = None
    source: str | None = None
    budget: float | None = Field(default=None, ge=0)
    status: CustomerStatus | None = None
    reported_at: date | None = None
    owner: str | None = None
    notes: str | None = None


class Customer(CustomerBase):
    id: int
