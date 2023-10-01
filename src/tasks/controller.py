from flask import request, Blueprint
from marshmallow.exceptions import ValidationError

from src.db import db
from src.helpers.response import api_response
from src.tasks.model import Task
from src.tasks.schema import task_schema, category_schema, tasks_schema


def get_tasks():
    tasks = Task.query.all()
    return api_response(
        200,
        data=dict(tasks=task_schema.dump(tasks)),
        message="Tasks retrieved successfully",
    )


def get_task(id):
    task = Task.query.get(id)
    return api_response(
        200, data=task_schema.dump(task), message="Task retrieved successfully"
    )


def create_task():
    data = request.json
    try:
        task_schema.load(data)
    except ValidationError as e:
        return api_response(400, message="Validation error", errors=e.messages)

    new_task = Task(
        title=data["title"],
        description=data["description"],
        category=data.get("category"),
        priority=data["priority"],
        expiry_date=data["expiry_date"],
        status=data["status"],
    )
    db.session.add(new_task)
    db.session.commit()
    return api_response(201, message="Task created successfully")


def update_task(id):
    task = Task.query.get(id)
    data = request.json

    task.title = data["title"]
    task.description = data["description"]
    task.category = data["category"]
    task.priority = data["priority"]
    task.expiry_date = data["expiry_date"]
    task.status = data["status"]

    db.session.commit()
    return api_response(200, message="Task updated successfully")


def delete_task(id):
    task = Task.query.get(id)
    db.session.delete(task)
    db.session.commit()
    return api_response(204, message="Task deleted successfully")
