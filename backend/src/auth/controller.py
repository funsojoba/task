from flask import request, Blueprint
from flask_jwt_extended import create_access_token

from datetime import timedelta, datetime

from marshmallow.exceptions import ValidationError
from werkzeug.security import generate_password_hash, check_password_hash

from src.db import db
from src.auth.model import User
from src.auth.schema import UserSchema
from src.helpers.response import api_response


def signup():
    data = request.get_json()

    user_schema = UserSchema()
    try:
        user_data = user_schema.load(data)
    except ValidationError as e:
        return api_response(400, message="Validation error", errors=e.messages)

    users_with_username = User.query.filter_by(username=user_data["username"]).all()

    if users_with_username:
        return api_response(409, message="Username already exists")

    user_data["password"] = generate_password_hash(user_data["password"])

    user = User(**user_data)
    db.session.add(user)
    db.session.commit()

    return api_response(201, message="sign up successful")


def login():
    data = request.get_json()

    user_schema = UserSchema()
    try:
        user_data = user_schema.load(data)
    except ValidationError as e:
        return api_response(400, message="Validation error", errors=e.messages)

    user = User.query.filter_by(username=user_data["username"]).first()
    if not user:
        return api_response(404, message="User not found")

    if check_password_hash(user.password, user_data["password"]):
        access_token = create_access_token(
            identity=user.id, expires_delta=timedelta(days=1)
        )
    else:
        return api_response(401, message="Invalid credentials")

    return api_response(200, message="login successful", data=dict(token=access_token))
