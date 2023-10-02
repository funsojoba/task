from flask import Blueprint
from src.tasks.controller import (
    get_tasks,
    get_task,
    create_task,
    update_task,
    delete_task,
)


task_bp = Blueprint("task", __name__)

# Define routes
@task_bp.route("/", methods=["GET"])
def list_tasks():
    return get_tasks()


@task_bp.route("/<int:id>", methods=["GET"])
def retrieve_task(id):
    return get_task(id)


@task_bp.route("/", methods=["POST"])
def task_create():
    return create_task()


@task_bp.route("/<int:id>", methods=["PUT"])
def task_update(id):
    return update_task(id)


@task_bp.route("/<int:id>", methods=["DELETE"])
def task_delete(id):
    return delete_task(id)
