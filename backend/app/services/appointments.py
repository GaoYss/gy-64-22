from app.services.base import CrudService


class AppointmentService(CrudService):
    collection = "appointments"


appointment_service = AppointmentService()
