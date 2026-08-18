from sqlalchemy import Column, Integer, String, Float, DateTime
from datetime import datetime

from app.database.database import Base


class Inventory(Base):
    __tablename__ = "inventory"

    id = Column(Integer, primary_key=True, index=True)

    product_name = Column(String(100), nullable=False)
    category = Column(String(100), nullable=True)

    quantity = Column(Integer, nullable=False, default=0)
    unit_price = Column(Float, nullable=False, default=0.0)

    supplier_name = Column(String(100), nullable=True)

    low_stock_limit = Column(
        Integer,
        nullable=False,
        default=5
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )

    updated_at = Column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow
    )