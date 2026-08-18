from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.feedback import Feedback

router = APIRouter(
    prefix="/feedback",
    tags=["Feedback"]
)


@router.get("/")
def get_feedback(db: Session = Depends(get_db)):
    return db.query(Feedback).all()