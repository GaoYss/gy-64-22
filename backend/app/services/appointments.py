from app.data.store import store
from app.services.base import CrudService
from app.schemas.customers import CustomerStatus

STATUS_ORDER: dict[CustomerStatus, int] = {
    "new": 0,
    "contacted": 1,
    "measured": 2,
    "quoted": 3,
    "signed": 4,
    "lost": 5,
}


class AppointmentService(CrudService):
    collection = "appointments"

    def update(self, item_id: int, payload) -> dict:
        update_data = payload.model_dump(exclude_unset=True, mode="json")
        item = store.update_item(self.collection, item_id, update_data)
        if item is None:
            from fastapi import HTTPException, status
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Resource not found")

        if item["status"] == "completed":
            self._update_customer_status_if_needed(item["customer_id"])

        return item

    def _update_customer_status_if_needed(self, customer_id: int) -> None:
        customer = None
        for c in store.customers:
            if c["id"] == customer_id:
                customer = c
                break

        if customer is None:
            return

        current_status = customer["status"]
        target_status: CustomerStatus = "measured"

        if STATUS_ORDER.get(current_status, 0) < STATUS_ORDER[target_status]:
            store.update_item("customers", customer_id, {"status": target_status})


appointment_service = AppointmentService()
