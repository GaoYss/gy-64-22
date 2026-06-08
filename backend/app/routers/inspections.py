from fastapi import APIRouter

from app.schemas.inspections import Inspection, InspectionCreate, InspectionUpdate
from app.services.inspections import inspection_service

router = APIRouter(prefix="/api/inspections", tags=["inspections"])


@router.get("", response_model=list[Inspection])
def list_inspections() -> list[dict]:
    return inspection_service.list()


@router.post("", response_model=Inspection, status_code=201)
def create_inspection(payload: InspectionCreate) -> dict:
    return inspection_service.create(payload)


@router.patch("/{inspection_id}", response_model=Inspection)
def update_inspection(inspection_id: int, payload: InspectionUpdate) -> dict:
    return inspection_service.update(inspection_id, payload)
