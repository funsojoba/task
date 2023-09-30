from flask import request, Blueprint
from marshmallow.exceptions import ValidationError


from werkzeug.security import generate_password_hash, check_password_hash

from src.auth.model import User
from src.auth.schema import UserSchema
from src.helpers.response import api_response

from src.db import db

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

    # query db for existing username
    users_with_username = User.query.filter_by(username=user_data["username"]).all()

    # if username already exists, return error
    if users_with_username:
        return api_response(409, message="Username already exists")

    user_data["password"] = generate_password_hash(user_data["password"])

    user = User(**user_data)
    db.session.add(user)
    db.session.commit()

    return api_response(201, message="sign up successful")


def login():
    pass
