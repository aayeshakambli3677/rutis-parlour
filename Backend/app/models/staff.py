from sqlalchemy import Column, Integer, String, Boolean
from app.database.database import Base


class Staff(Base):
    __tablename__ = "staff"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(100), nullable=False)
    email = Column(String(150), unique=True, nullable=False, index=True)
    phone = Column(String(20), nullable=True)
    role = Column(String(50), nullable=False, default="staff")
    specialization = Column(String(100), nullable=True)
    is_active = Column(Boolean, default=True)