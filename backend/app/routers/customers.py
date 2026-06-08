from fastapi import APIRouter

from app.schemas.customers import Customer, CustomerCreate, CustomerUpdate
from app.services.customers import customer_service

router = APIRouter(prefix="/api/customers", tags=["customers"])


@router.get("", response_model=list[Customer])
def list_customers() -> list[dict]:
    return customer_service.list()


@router.post("", response_model=Customer, status_code=201)
def create_customer(payload: CustomerCreate) -> dict:
    return customer_service.create(payload)


@router.patch("/{customer_id}", response_model=Customer)
def update_customer(customer_id: int, payload: CustomerUpdate) -> dict:
    return customer_service.update(customer_id, payload)
