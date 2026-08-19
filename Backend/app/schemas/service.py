from pydantic import BaseModel
from typing import Optional


class ServiceCreate(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    duration: int
    category: Optional[str] = None


class ServiceUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    price: Optional[float] = None
    duration: Optional[int] = None
    category: Optional[str] = None
    is_active: Optional[bool] = None


class ServiceResponse(BaseModel):
    id: int
    name: str
    description: Optional[str]
    price: float
    duration: int
    category: Optional[str]
    is_active: bool

    class Config:
        from_attributes = True