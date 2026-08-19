from sqlalchemy import Column, Integer, Date, Time, String, ForeignKey
from sqlalchemy.orm import relationship

from app.database.database import Base


class Appointment(Base):
    __tablename__ = "appointments"

    id = Column(Integer, primary_key=True, index=True)

    customer_id = Column(
        Integer,
        ForeignKey("customers.id"),
        nullable=False
    )

    service_id = Column(
        Integer,
        ForeignKey("services.id"),
        nullable=False
    )

    staff_id = Column(
        Integer,
        ForeignKey("staff.id"),
        nullable=True
    )

    appointment_date = Column(Date, nullable=False)
    appointment_time = Column(Time, nullable=False)

    status = Column(String(50), default="pending")
    notes = Column(String(500), nullable=True)

    # Relationships
    customer = relationship("Customer")
    service = relationship("Service")
    staff = relationship("Staff")