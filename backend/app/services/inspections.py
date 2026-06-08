from app.services.base import CrudService


class InspectionService(CrudService):
    collection = "inspections"


inspection_service = InspectionService()
