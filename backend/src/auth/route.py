from flask import Blueprint


auth_bp = Blueprint("auth", __name__)

# Define routes
@auth_bp.route("/register", methods=["POST"])
def register():
    from src.auth.controller import signup

    return signup()


@auth_bp.route("/login", methods=["POST"])
def login():
    from src.auth.controller import login

    return login()
