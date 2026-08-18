from sqlalchemy.orm import Session

from app.models.billing import Billing
from app.schemas.billing import BillingCreate, BillingUpdate


def create_bill(db: Session, bill_data: BillingCreate):
    new_bill = Billing(**bill_data.model_dump())

    db.add(new_bill)
    db.commit()
    db.refresh(new_bill)

    return new_bill


def get_all_bills(db: Session):
    return db.query(Billing).all()


def get_bill_by_id(db: Session, bill_id: int):
    return db.query(Billing).filter(
        Billing.id == bill_id
    ).first()


def update_bill(
    db: Session,
    bill_id: int,
    bill_data: BillingUpdate
):
    bill = get_bill_by_id(db, bill_id)

    if not bill:
        return None

    update_data = bill_data.model_dump(
        exclude_unset=True
    )

    for key, value in update_data.items():
        setattr(bill, key, value)

    db.commit()
    db.refresh(bill)

    return bill


def delete_bill(db: Session, bill_id: int):
    bill = get_bill_by_id(db, bill_id)

    if not bill:
        return None

    db.delete(bill)
    db.commit()

    return bill