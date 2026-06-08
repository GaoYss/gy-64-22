from app.services.base import CrudService


class ProcurementService(CrudService):
    collection = "procurements"


procurement_service = ProcurementService()
