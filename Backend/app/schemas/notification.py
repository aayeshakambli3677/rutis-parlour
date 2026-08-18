from pydantic import BaseModel, ConfigDict
from datetime import datetime
from typing import Optional


class NotificationBase(BaseModel):
    customer_id: Optional[int] = None
    title: str
    message: str
    notification_type: str = "General"
    is_read: bool = False


class NotificationCreate(NotificationBase):
    pass


class NotificationUpdate(BaseModel):
    title: Optional[str] = None
    message: Optional[str] = None
    notification_type: Optional[str] = None
    is_read: Optional[bool] = None


class NotificationResponse(NotificationBase):
    id: int
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)