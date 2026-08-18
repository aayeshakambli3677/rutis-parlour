from sqlalchemy import Column, Integer, Float, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime

from app.database.database import Base


class Billing(Base):
    __tablename__ = "billings"

    id = Column(Integer, primary_key=True, index=True)

    customer_id = Column(
        Integer,
        ForeignKey("customers.id"),
        nullable=False
    )

    appointment_id = Column(
        Integer,
        ForeignKey("appointments.id"),
        nullable=True
    )

    subtotal = Column(Float, nullable=False, default=0.0)
    discount = Column(Float, nullable=False, default=0.0)
    tax = Column(Float, nullable=False, default=0.0)
    total_amount = Column(Float, nullable=False, default=0.0)

    payment_method = Column(
        String(50),
        nullable=False,
        default="Cash"
    )

    payment_status = Column(
        String(30),
        nullable=False,
        default="Paid"
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )

    customer = relationship("Customer")
    appointment = relationship("Appointment")