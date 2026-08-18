from pydantic import BaseModel, ConfigDict
from datetime import datetime
from typing import Optional


class MembershipBase(BaseModel):
    customer_id: int
    membership_name: str
    membership_type: Optional[str] = None
    price: float = 0.0
    start_date: Optional[datetime] = None
    end_date: Optional[datetime] = None
    status: str = "Active"


class MembershipCreate(MembershipBase):
    pass


class MembershipUpdate(BaseModel):
    membership_name: Optional[str] = None
    membership_type: Optional[str] = None
    price: Optional[float] = None
    start_date: Optional[datetime] = None
    end_date: Optional[datetime] = None
    status: Optional[str] = None


class MembershipResponse(MembershipBase):
    id: int

    model_config = ConfigDict(from_attributes=True)