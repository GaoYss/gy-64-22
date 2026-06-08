from fastapi import APIRouter

from app.schemas.appointments import Appointment, AppointmentCreate, AppointmentUpdate
from app.services.appointments import appointment_service

router = APIRouter(prefix="/api/appointments", tags=["appointments"])


@router.get("", response_model=list[Appointment])
def list_appointments() -> list[dict]:
    return appointment_service.list()


@router.post("", response_model=Appointment, status_code=201)
def create_appointment(payload: AppointmentCreate) -> dict:
    return appointment_service.create(payload)


@router.patch("/{appointment_id}", response_model=Appointment)
def update_appointment(appointment_id: int, payload: AppointmentUpdate) -> dict:
    return appointment_service.update(appointment_id, payload)
