from marshmallow import Schema, fields
from marshmallow_enum import EnumField
from .model import Task, Priority, Category, Status


class PriorityEnumField(EnumField):
    def __init__(self, enum, *args, **kwargs):
        super(PriorityEnumField, self).__init__(enum, by_value=True, *args, **kwargs)


class StatusEnumField(EnumField):
    def __init__(self, enum, *args, **kwargs):
        super(StatusEnumField, self).__init__(enum, by_value=True, *args, **kwargs)


class CategorySchema(Schema):
    id = fields.String()
    name = fields.String(required=True)


class TaskSchema(Schema):
    id = fields.Integer(dump_only=True)
    title = fields.String(required=True)
    description = fields.String(required=True)
    category = fields.Nested(CategorySchema)
    priority = PriorityEnumField(Priority, required=True)
    expiry_date = fields.Date(required=True)
    status = StatusEnumField(Status, required=True)
    created_at = fields.DateTime(dump_only=True)


# Initialize the schemas
category_schema = CategorySchema()
task_schema = TaskSchema()
tasks_schema = TaskSchema(many=True)
