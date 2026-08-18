from pydantic import BaseModel, ConfigDict
from datetime import datetime
from typing import Optional


class BillingBase(BaseModel):
    customer_id: int
    appointment_id: Optional[int] = None
    subtotal: float = 0.0
    discount: float = 0.0
    tax: float = 0.0
    total_amount: float = 0.0
    payment_method: str = "Cash"
    payment_status: str = "Paid"


class BillingCreate(BillingBase):
    pass


class BillingUpdate(BaseModel):
    subtotal: Optional[float] = None
    discount: Optional[float] = None
    tax: Optional[float] = None
    total_amount: Optional[float] = None
    payment_method: Optional[str] = None
    payment_status: Optional[str] = None


class BillingResponse(BillingBase):
    id: int
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)