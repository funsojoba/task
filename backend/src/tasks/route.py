from flask import Blueprint
from flask_cors import cross_origin, CORS
from src.tasks.controller import (
    get_tasks,
    get_task,
    create_task,
    update_task,
    delete_task,
)


task_bp = Blueprint("task", __name__)
CORS(task_bp, resources={f"/api/*": {"origin": "*"}})

# Define routes
@task_bp.route("/api/tasks", methods=["GET"])
@cross_origin()
def list_tasks():
    return get_tasks()


@task_bp.route("/api/tasks/<int:id>", methods=["GET"])
@cross_origin()
def retrieve_task(id):
    return get_task(id)


@task_bp.route("/api/tasks", methods=["POST"])
@cross_origin()
def task_create():
    return create_task()


@task_bp.route("/api/tasks/<int:id>", methods=["PUT"])
@cross_origin()
def task_update(id):
    return update_task(id)


@task_bp.route("/api/tasks/<int:id>", methods=["DELETE"])
@cross_origin()
def task_delete(id):
    return delete_task(id)
