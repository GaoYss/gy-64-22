from app.services.base import CrudService


class CustomerService(CrudService):
    collection = "customers"


customer_service = CustomerService()
