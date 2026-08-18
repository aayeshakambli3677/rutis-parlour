from pydantic import BaseModel, ConfigDict, Field
from datetime import datetime
from typing import Optional


class FeedbackBase(BaseModel):
    customer_id: int
    rating: int = Field(..., ge=1, le=5)
    comment: Optional[str] = None


class FeedbackCreate(FeedbackBase):
    pass


class FeedbackUpdate(BaseModel):
    rating: Optional[int] = Field(None, ge=1, le=5)
    comment: Optional[str] = None


class FeedbackResponse(FeedbackBase):
    id: int
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)