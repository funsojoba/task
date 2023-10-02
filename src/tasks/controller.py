from flask import request, Blueprint
from marshmallow.exceptions import ValidationError

from src.db import db
from src.helpers.response import api_response
from src.tasks.model import Task, Priority, Status
from src.tasks.schema import task_schema, category_schema, tasks_schema


def get_tasks():
    tasks = Task.query.all()
    serialized_tasks = tasks_schema.dump(tasks)
    return api_response(
        200,
        data={"tasks": serialized_tasks},
        message="Tasks retrieved successfully",
    )


def get_task(id):
    task = Task.query.get(id)

    if not task:
        return api_response(404, message="Task not found")

    return api_response(
        200, data=task_schema.dump(task), message="Task retrieved successfully"
    )


def create_task():
    data = request.json
    try:
        task_schema.load(data)
    except ValidationError as e:
        return api_response(400, message="Validation error", errors=e.messages)

    new_task = Task(**task_schema.load(data))
    db.session.add(new_task)
    db.session.commit()
    return api_response(201, message="Task created successfully")


def update_task(id):
    task = Task.query.get(id)

    if not task:
        return api_response(404, message="Task not found")

    data = request.json

    if "status" in data:
        try:
            task.status = Status[data["status"].upper()]
        except KeyError:
            return jsonify({"message": "Invalid status value"}), 400

    if "priority" in data:
        try:
            task.priority = Priority[data["priority"].upper()]
        except KeyError:
            return jsonify({"message": "Invalid priority value"}), 400

    task.title = data.get("title", task.title)
    task.description = data.get("description", task.description)
    task.category = data.get("category", task.category)
    task.expiry_date = data.get("expiry_date", task.expiry_date)
    db.session.commit()

    return api_response(200, message="Task updated successfully")


def delete_task(id):
    task = Task.query.get(id)
    if not task:
        return api_response(404, message="Task not found")
    db.session.delete(task)
    db.session.commit()
    return api_response(200, message="Task deleted successfully")
