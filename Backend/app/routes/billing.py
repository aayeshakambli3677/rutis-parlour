from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.billing import Billing
from app.database.database import Base
from app.schemas.billing import (
    BillingCreate,
    BillingUpdate,
    BillingResponse
)


router = APIRouter(
    prefix="/billing",
    tags=["Billing"]
)


@router.post("/", response_model=BillingResponse)
def create_bill(
    bill: BillingCreate,
    db: Session = Depends(get_db)
):
    new_bill = Billing(**bill.model_dump())

    db.add(new_bill)
    db.commit()
    db.refresh(new_bill)

    return new_bill


@router.get("/", response_model=list[BillingResponse])
def get_bills(
    db: Session = Depends(get_db)
):
    return db.query(Billing).all()


@router.get("/{bill_id}", response_model=BillingResponse)
def get_bill(
    bill_id: int,
    db: Session = Depends(get_db)
):
    bill = db.query(Billing).filter(
        Billing.id == bill_id
    ).first()

    if not bill:
        raise HTTPException(
            status_code=404,
            detail="Bill not found"
        )

    return bill


@router.put("/{bill_id}", response_model=BillingResponse)
def update_bill(
    bill_id: int,
    bill_data: BillingUpdate,
    db: Session = Depends(get_db)
):
    bill = db.query(Billing).filter(
        Billing.id == bill_id
    ).first()

    if not bill:
        raise HTTPException(
            status_code=404,
            detail="Bill not found"
        )

    update_data = bill_data.model_dump(
        exclude_unset=True
    )

    for key, value in update_data.items():
        setattr(bill, key, value)

    db.commit()
    db.refresh(bill)

    return bill


@router.delete("/{bill_id}")
def delete_bill(
    bill_id: int,
    db: Session = Depends(get_db)
):
    bill = db.query(Billing).filter(
        Billing.id == bill_id
    ).first()

    if not bill:
        raise HTTPException(
            status_code=404,
            detail="Bill not found"
        )

    db.delete(bill)
    db.commit()

    return {
        "message": "Bill deleted successfully"
    }