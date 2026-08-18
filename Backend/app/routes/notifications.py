from sqlalchemy import Column, Integer, String, Text, DateTime, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime

from app.database import Base


class Notification(Base):
    __tablename__ = "notifications"

    id = Column(Integer, primary_key=True, index=True)

    customer_id = Column(
        Integer,
        ForeignKey("customers.id"),
        nullable=True
    )

    title = Column(String(150), nullable=False)
    message = Column(Text, nullable=False)

    notification_type = Column(
        String(50),
        nullable=False,
        default="General"
    )

    is_read = Column(Boolean, default=False)

    created_at = Column(DateTime, default=datetime.utcnow)

    customer = relationship("Customer")