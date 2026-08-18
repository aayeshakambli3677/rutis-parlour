from sqlalchemy import Column, Integer, String, Float, DateTime
from datetime import datetime

from app.database.database import Base


class Membership(Base):
    __tablename__ = "memberships"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(
        String(100),
        nullable=False
    )

    description = Column(
        String(255),
        nullable=True
    )

    price = Column(
        Float,
        nullable=False,
        default=0.0
    )

    duration_days = Column(
        Integer,
        nullable=False,
        default=30
    )

    status = Column(
        String(30),
        nullable=False,
        default="Active"
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )