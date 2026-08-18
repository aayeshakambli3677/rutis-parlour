from sqlalchemy.orm import Session

from app.models.membership import Membership
from app.schemas.membership import MembershipCreate, MembershipUpdate


def create_membership(db: Session, membership_data: MembershipCreate):
    new_membership = Membership(**membership_data.model_dump())

    db.add(new_membership)
    db.commit()
    db.refresh(new_membership)

    return new_membership


def get_all_memberships(db: Session):
    return db.query(Membership).all()


def get_membership_by_id(db: Session, membership_id: int):
    return db.query(Membership).filter(
        Membership.id == membership_id
    ).first()


def update_membership(
    db: Session,
    membership_id: int,
    membership_data: MembershipUpdate
):
    membership = get_membership_by_id(db, membership_id)

    if not membership:
        return None

    update_data = membership_data.model_dump(
        exclude_unset=True
    )

    for key, value in update_data.items():
        setattr(membership, key, value)

    db.commit()
    db.refresh(membership)

    return membership


def delete_membership(db: Session, membership_id: int):
    membership = get_membership_by_id(db, membership_id)

    if not membership:
        return None

    db.delete(membership)
    db.commit()

    return membership


def get_active_memberships(db: Session):
    return db.query(Membership).filter(
        Membership.status == "Active"
    ).all()