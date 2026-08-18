from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Date
from sqlalchemy import ForeignKey

from sqlalchemy.orm import relationship

from app.database.database import Base

from sqlalchemy.orm import relationship


class Customer(Base):

    __tablename__ = "customers"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        unique=True
    )

    phone = Column(String(15))

    gender = Column(String(20))

    dob = Column(Date)

    address = Column(String(255))

    user = relationship(
    "User",
    back_populates="customer"
)

    beauty_profile = relationship(
    "BeautyProfile",
    back_populates="customer",
    uselist=False
)