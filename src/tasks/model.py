from src.db import db
from enum import Enum as EnumBase


class Priority(EnumBase):
    HIGH = "high"
    MID = "mid"
    LOW = "low"


class Status(EnumBase):
    TODO = "todo"
    DONE = "done"
    IN_PROGRESS = "in_progress"


class Category(db.Model):
    id = db.Column(db.String(100), primary_key=True)
    name = db.Column(db.String(100), nullable=False)


class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    category = db.Column(db.String(100), nullable=True)
    priority = db.Column(db.Enum(Priority), nullable=False, default=Priority.LOW)
    expiry_date = db.Column(db.Date, nullable=False)
    status = db.Column(db.Enum(Status), nullable=False, default=Status.TODO)
    created_at = db.Column(db.DateTime, server_default=db.func.now())

    def __init__(
        self, title, description, priority, expiry_date, status, category=None
    ):
        self.title = title
        self.description = description
        self.category = category
        self.priority = priority
        self.expiry_date = expiry_date
        self.status = status
        self.created_at = db.func.now()

    def __repr__(self):
        return f"<Task {self.title}>"
