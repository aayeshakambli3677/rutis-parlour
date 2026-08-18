from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import ForeignKey

from sqlalchemy.orm import relationship

from app.database.database import Base


class BeautyProfile(Base):

    __tablename__ = "beauty_profiles"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    customer_id = Column(
        Integer,
        ForeignKey("customers.id"),
        unique=True
    )

    skin_type = Column(String(50))

    hair_type = Column(String(50))

    allergies = Column(String(255))

    preferred_beautician = Column(String(100))

    preferred_services = Column(String(255))

    notes = Column(String(500))

    customer = relationship(
    "Customer",
    back_populates="beauty_profile"
)