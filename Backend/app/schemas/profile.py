from pydantic import BaseModel
from datetime import date
from typing import Optional


class UserProfile(BaseModel):
    id: int
    full_name: str
    email: str
    role: str

    class Config:
        from_attributes = True


class CustomerProfile(BaseModel):
    id: int
    phone: str
    gender: str
    dob: date
    address: str

    class Config:
        from_attributes = True


class BeautyProfileResponse(BaseModel):
    skin_type: Optional[str] = None
    hair_type: Optional[str] = None
    allergies: Optional[str] = None
    preferred_beautician: Optional[str] = None
    preferred_services: Optional[str] = None
    notes: Optional[str] = None

    class Config:
        from_attributes = True


class CompleteProfile(BaseModel):
    user: UserProfile
    customer: Optional[CustomerProfile] = None
    beauty_profile: Optional[BeautyProfileResponse] = None