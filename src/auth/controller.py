from flask import request, Blueprint
from marshmallow.exceptions import ValidationError


from werkzeug.security import generate_password_hash, check_password_hash

from src.db import db
from src.helpers.response import api_response
from src.auth.schema import UserSchema

from flask_jwt_extended import (
    create_access_token,
    JWTManager,
    jwt_required,
)


def signup():
    data = request.get_json()

    user_schema = UserSchema()
    try:
        # Deserialize and validate the incoming data against the schema
        user_data = user_schema.load(data)
    except ValidationError as e:
        return api_response(400, message="Validation error", errors=e.messages)

    return api_response(200, message="sign up successful", data=data)
