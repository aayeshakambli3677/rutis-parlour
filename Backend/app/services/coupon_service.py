from sqlalchemy.orm import Session

from app.models.coupon import Coupon
from app.schemas.coupon import CouponCreate, CouponUpdate


def create_coupon(db: Session, coupon_data: CouponCreate):
    new_coupon = Coupon(**coupon_data.model_dump())

    db.add(new_coupon)
    db.commit()
    db.refresh(new_coupon)

    return new_coupon


def get_all_coupons(db: Session):
    return db.query(Coupon).all()


def get_coupon_by_id(db: Session, coupon_id: int):
    return db.query(Coupon).filter(
        Coupon.id == coupon_id
    ).first()


def get_coupon_by_code(db: Session, code: str):
    return db.query(Coupon).filter(
        Coupon.code == code
    ).first()


def update_coupon(
    db: Session,
    coupon_id: int,
    coupon_data: CouponUpdate
):
    coupon = get_coupon_by_id(db, coupon_id)

    if not coupon:
        return None

    update_data = coupon_data.model_dump(
        exclude_unset=True
    )

    for key, value in update_data.items():
        setattr(coupon, key, value)

    db.commit()
    db.refresh(coupon)

    return coupon


def delete_coupon(db: Session, coupon_id: int):
    coupon = get_coupon_by_id(db, coupon_id)

    if not coupon:
        return None

    db.delete(coupon)
    db.commit()

    return coupon


def get_active_coupons(db: Session):
    return db.query(Coupon).filter(
        Coupon.is_active == True
    ).all()


def use_coupon(db: Session, coupon_id: int):
    coupon = get_coupon_by_id(db, coupon_id)

    if not coupon:
        return None

    if not coupon.is_active:
        return None

    if (
        coupon.usage_limit is not None
        and coupon.used_count >= coupon.usage_limit
    ):
        return None

    coupon.used_count += 1

    if (
        coupon.usage_limit is not None
        and coupon.used_count >= coupon.usage_limit
    ):
        coupon.is_active = False

    db.commit()
    db.refresh(coupon)

    return coupon