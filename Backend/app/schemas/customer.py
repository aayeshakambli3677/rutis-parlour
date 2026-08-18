from pydantic import BaseModel
from datetime import date


class CustomerCreate(BaseModel):

    user_id: int

    phone: str

    gender: str

    dob: date

    address: str


class CustomerResponse(BaseModel):

    id: int

    user_id: int

    phone: str

    gender: str

    dob: date

    address: str

    class Config:
        from_attributes = True

class CustomerUpdate(BaseModel):

    phone: str
    gender: str
    dob: date
    address: str