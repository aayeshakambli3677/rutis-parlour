from pydantic import BaseModel, ConfigDict
from datetime import datetime
from typing import Optional


class CouponBase(BaseModel):
    code: str
    description: Optional[str] = None
    discount_type: str = "percentage"
    discount_value: float = 0.0
    minimum_amount: float = 0.0
    start_date: Optional[datetime] = None
    end_date: Optional[datetime] = None
    usage_limit: Optional[int] = None
    used_count: int = 0
    is_active: bool = True


class CouponCreate(CouponBase):
    pass


class CouponUpdate(BaseModel):
    code: Optional[str] = None
    description: Optional[str] = None
    discount_type: Optional[str] = None
    discount_value: Optional[float] = None
    minimum_amount: Optional[float] = None
    start_date: Optional[datetime] = None
    end_date: Optional[datetime] = None
    usage_limit: Optional[int] = None
    used_count: Optional[int] = None
    is_active: Optional[bool] = None


class CouponResponse(CouponBase):
    id: int
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)