from flask import Blueprint
from flask_cors import cross_origin, CORS


auth_bp = Blueprint("auth", __name__)
CORS(auth_bp, resources={f"/api/*": {"origin": "*"}})

# Define routes
@auth_bp.route("/api/auth/register", methods=["POST"])
@cross_origin()
def register():
    from src.auth.controller import signup

    return signup()


@auth_bp.route("/api/auth/login", methods=["POST"])
@cross_origin()
def login():
    from src.auth.controller import login

    return login()
