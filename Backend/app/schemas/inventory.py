from pydantic import BaseModel, ConfigDict
from datetime import datetime
from typing import Optional


class InventoryBase(BaseModel):
    product_name: str
    category: Optional[str] = None
    quantity: int = 0
    unit_price: float = 0.0
    supplier_name: Optional[str] = None
    low_stock_limit: int = 5


class InventoryCreate(InventoryBase):
    pass


class InventoryUpdate(BaseModel):
    product_name: Optional[str] = None
    category: Optional[str] = None
    quantity: Optional[int] = None
    unit_price: Optional[float] = None
    supplier_name: Optional[str] = None
    low_stock_limit: Optional[int] = None


class InventoryResponse(InventoryBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    model_config = ConfigDict(from_attributes=True)