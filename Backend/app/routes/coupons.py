from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.coupon import Coupon
from app.schemas.coupon import (
    CouponCreate,
    CouponUpdate,
    CouponResponse
)


router = APIRouter(
    prefix="/coupons",
    tags=["Coupons"]
)


@router.post("/", response_model=CouponResponse)
def create_coupon(
    coupon: CouponCreate,
    db: Session = Depends(get_db)
):
    new_coupon = Coupon(**coupon.model_dump())

    db.add(new_coupon)
    db.commit()
    db.refresh(new_coupon)

    return new_coupon


@router.get("/", response_model=list[CouponResponse])
def get_coupons(
    db: Session = Depends(get_db)
):
    return db.query(Coupon).all()


@router.get("/{coupon_id}", response_model=CouponResponse)
def get_coupon(
    coupon_id: int,
    db: Session = Depends(get_db)
):
    coupon = db.query(Coupon).filter(
        Coupon.id == coupon_id
    ).first()

    if not coupon:
        raise HTTPException(
            status_code=404,
            detail="Coupon not found"
        )

    return coupon


@router.put("/{coupon_id}", response_model=CouponResponse)
def update_coupon(
    coupon_id: int,
    coupon_data: CouponUpdate,
    db: Session = Depends(get_db)
):
    coupon = db.query(Coupon).filter(
        Coupon.id == coupon_id
    ).first()

    if not coupon:
        raise HTTPException(
            status_code=404,
            detail="Coupon not found"
        )

    update_data = coupon_data.model_dump(
        exclude_unset=True
    )

    for key, value in update_data.items():
        setattr(coupon, key, value)

    db.commit()
    db.refresh(coupon)

    return coupon


@router.delete("/{coupon_id}")
def delete_coupon(
    coupon_id: int,
    db: Session = Depends(get_db)
):
    coupon = db.query(Coupon).filter(
        Coupon.id == coupon_id
    ).first()

    if not coupon:
        raise HTTPException(
            status_code=404,
            detail="Coupon not found"
        )

    db.delete(coupon)
    db.commit()

    return {
        "message": "Coupon deleted successfully"
    }