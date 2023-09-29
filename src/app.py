import logging

from flask import Flask, request
from helpers.response import api_response
from decouple import config


app = Flask(__name__)
app.secret_key = config("SECRET_KEY")


@app.route("/")
def index():
    return api_response(200, {"message": "Welcome to my API"})


if __name__ == "__main__":
    app.run(debug=True, port=config("PORT"))
