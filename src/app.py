import logging

from decouple import config
from flask import Flask, request

from src.auth.route import auth_bp
from src.helpers.response import api_response


app = Flask(__name__)
app.secret_key = config("SECRET_KEY")


# Routes
app.register_blueprint(auth_bp, url_prefix="/auth")


@app.route("/")
def index():
    return api_response(200, message="Welcome to my API")


if __name__ == "__main__":
    app.run(debug=True, port=config("PORT"))
