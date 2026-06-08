from fastapi import APIRouter

from app.schemas.procurement import Procurement, ProcurementCreate, ProcurementUpdate
from app.services.procurement import procurement_service

router = APIRouter(prefix="/api/procurements", tags=["procurement"])


@router.get("", response_model=list[Procurement])
def list_procurements() -> list[dict]:
    return procurement_service.list()


@router.post("", response_model=Procurement, status_code=201)
def create_procurement(payload: ProcurementCreate) -> dict:
    return procurement_service.create(payload)


@router.patch("/{procurement_id}", response_model=Procurement)
def update_procurement(procurement_id: int, payload: ProcurementUpdate) -> dict:
    return procurement_service.update(procurement_id, payload)
