from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.database.database import get_db

from app.schemas.user import (
    UserCreate,
    UserLogin
)

from app.services.auth_service import (
    register_user,
    login_user
)

from app.utils.auth_dependency import (
    get_current_user
)

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


@router.post("/register")
def register(
    user: UserCreate,
    db: Session = Depends(get_db)
):

    new_user = register_user(
        db,
        user.full_name,
        user.email,
        user.password
    )

    if not new_user:
        raise HTTPException(
            status_code=400,
            detail="Email already exists"
        )

    return {
        "message": "User registered successfully"
    }


@router.post("/login")
def login(
    user: UserLogin,
    db: Session = Depends(get_db)
):

    token = login_user(
        db,
        user.email,
        user.password
    )

    if not token:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    return token

@router.get("/me")
def get_me(

    current_user=Depends(
        get_current_user
    )

):

    return current_user