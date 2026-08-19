from sqlalchemy import Column, Integer, String, Float, Boolean
from app.database.database import Base


class Service(Base):
    __tablename__ = "services"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    description = Column(String(500), nullable=True)
    price = Column(Float, nullable=False)
    duration = Column(Integer, nullable=False)
    category = Column(String(100), nullable=True)
    is_active = Column(Boolean, default=True)