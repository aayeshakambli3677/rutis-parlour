from sqlalchemy.orm import Session

from app.models.user import User

from app.utils.password import (
    hash_password,
    verify_password
)

from app.utils.jwt_handler import (
    create_access_token
)


def register_user(
    db: Session,
    full_name: str,
    email: str,
    password: str
):

    existing_user = (
        db.query(User)
        .filter(User.email == email)
        .first()
    )

    if existing_user:
        return None

    new_user = User(
        full_name=full_name,
        email=email,
        password=hash_password(password),
        role="customer"
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user


def login_user(
    db: Session,
    email: str,
    password: str
):

    user = (
        db.query(User)
        .filter(User.email == email)
        .first()
    )

    if not user:
        return None

    if not verify_password(
        password,
        user.password
    ):
        return None

    token = create_access_token(
        {
            "user_id": user.id,
            "email": user.email,
            "role": user.role
        }
    )

    return {
        "access_token": token,
        "token_type": "bearer"
    }