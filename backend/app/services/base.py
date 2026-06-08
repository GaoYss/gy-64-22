from fastapi import HTTPException, status
from pydantic import BaseModel

from app.data.store import store


class CrudService:
    collection: str

    def list(self) -> list[dict]:
        return store.list_items(self.collection)

    def create(self, payload: BaseModel) -> dict:
        return store.add_item(self.collection, payload.model_dump(mode="json"))

    def update(self, item_id: int, payload: BaseModel) -> dict:
        update_data = payload.model_dump(exclude_unset=True, mode="json")
        item = store.update_item(self.collection, item_id, update_data)
        if item is None:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Resource not found")
        return item
