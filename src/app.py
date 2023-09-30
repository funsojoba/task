import os
import logging

from decouple import config
from dotenv import load_dotenv
from flask import Flask, request
from flask_migrate import Migrate

from src.auth.route import auth_bp
from src.helpers.response import api_response

from src.db import db

from src.auth.model import User


load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv("SECRET_KEY")
app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("SQLALCHEMY_DATABASE_URI")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False


db.init_app(app)
migrate = Migrate(app, db)

# Routes
app.register_blueprint(auth_bp, url_prefix="/auth")


@app.route("/")
def index():
    return api_response(200, message="Welcome to my API")


if __name__ == "__main__":
    app.run(debug=True, port=config("PORT"))
