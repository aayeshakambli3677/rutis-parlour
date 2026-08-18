from sqlalchemy import Column, Integer, String, Text, DateTime
from datetime import datetime

from app.database import Base


class Feedback(Base):
    __tablename__ = "feedback"

    id = Column(Integer, primary_key=True, index=True)
    customer_name = Column(String(100), nullable=False)
    message = Column(Text, nullable=False)
    rating = Column(Integer, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)