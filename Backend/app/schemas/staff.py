from pydantic import BaseModel, EmailStr
from typing import Optional


class StaffCreate(BaseModel):
    full_name: str
    email: EmailStr
    phone: Optional[str] = None
    role: str = "staff"
    specialization: Optional[str] = None


class StaffUpdate(BaseModel):
    full_name: Optional[str] = None
    phone: Optional[str] = None
    role: Optional[str] = None
    specialization: Optional[str] = None
    is_active: Optional[bool] = None


class StaffResponse(BaseModel):
    id: int
    full_name: str
    email: EmailStr
    phone: Optional[str]
    role: str
    specialization: Optional[str]
    is_active: bool

    class Config:
        from_attributes = True