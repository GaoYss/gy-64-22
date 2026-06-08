from app.services.base import CrudService


class ProjectService(CrudService):
    collection = "projects"


project_service = ProjectService()
