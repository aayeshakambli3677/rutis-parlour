from sqlalchemy.orm import Session

from app.models.notification import Notification
from app.schemas.notification import (
    NotificationCreate,
    NotificationUpdate
)


def create_notification(
    db: Session,
    notification_data: NotificationCreate
):
    new_notification = Notification(
        **notification_data.model_dump()
    )

    db.add(new_notification)
    db.commit()
    db.refresh(new_notification)

    return new_notification


def get_all_notifications(db: Session):
    return db.query(Notification).order_by(
        Notification.created_at.desc()
    ).all()


def get_notification_by_id(
    db: Session,
    notification_id: int
):
    return db.query(Notification).filter(
        Notification.id == notification_id
    ).first()


def update_notification(
    db: Session,
    notification_id: int,
    notification_data: NotificationUpdate
):
    notification = get_notification_by_id(
        db,
        notification_id
    )

    if not notification:
        return None

    update_data = notification_data.model_dump(
        exclude_unset=True
    )

    for key, value in update_data.items():
        setattr(notification, key, value)

    db.commit()
    db.refresh(notification)

    return notification


def delete_notification(
    db: Session,
    notification_id: int
):
    notification = get_notification_by_id(
        db,
        notification_id
    )

    if not notification:
        return None

    db.delete(notification)
    db.commit()

    return notification


def get_unread_notifications(db: Session):
    return db.query(Notification).filter(
        Notification.is_read == False
    ).order_by(
        Notification.created_at.desc()
    ).all()


def mark_notification_as_read(
    db: Session,
    notification_id: int
):
    notification = get_notification_by_id(
        db,
        notification_id
    )

    if not notification:
        return None

    notification.is_read = True

    db.commit()
    db.refresh(notification)

    return notification