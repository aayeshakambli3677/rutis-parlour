from pydantic import BaseModel


class BeautyProfileCreate(BaseModel):

    customer_id: int

    skin_type: str

    hair_type: str

    allergies: str

    preferred_beautician: str

    preferred_services: str

    notes: str


class BeautyProfileUpdate(BaseModel):

    skin_type: str

    hair_type: str

    allergies: str

    preferred_beautician: str

    preferred_services: str

    notes: str