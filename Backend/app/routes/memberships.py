from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.membership import Membership
from app.schemas.membership import (
    MembershipCreate,
    MembershipUpdate,
    MembershipResponse
)


router = APIRouter(
    prefix="/memberships",
    tags=["Memberships"]
)


@router.post("/", response_model=MembershipResponse)
def create_membership(
    membership: MembershipCreate,
    db: Session = Depends(get_db)
):
    new_membership = Membership(
        **membership.model_dump()
    )

    db.add(new_membership)
    db.commit()
    db.refresh(new_membership)

    return new_membership


@router.get("/", response_model=list[MembershipResponse])
def get_memberships(
    db: Session = Depends(get_db)
):
    return db.query(Membership).all()


@router.get("/{membership_id}", response_model=MembershipResponse)
def get_membership(
    membership_id: int,
    db: Session = Depends(get_db)
):
    membership = db.query(Membership).filter(
        Membership.id == membership_id
    ).first()

    if not membership:
        raise HTTPException(
            status_code=404,
            detail="Membership not found"
        )

    return membership


@router.put("/{membership_id}", response_model=MembershipResponse)
def update_membership(
    membership_id: int,
    membership_data: MembershipUpdate,
    db: Session = Depends(get_db)
):
    membership = db.query(Membership).filter(
        Membership.id == membership_id
    ).first()

    if not membership:
        raise HTTPException(
            status_code=404,
            detail="Membership not found"
        )

    update_data = membership_data.model_dump(
        exclude_unset=True
    )

    for key, value in update_data.items():
        setattr(membership, key, value)

    db.commit()
    db.refresh(membership)

    return membership


@router.delete("/{membership_id}")
def delete_membership(
    membership_id: int,
    db: Session = Depends(get_db)
):
    membership = db.query(Membership).filter(
        Membership.id == membership_id
    ).first()

    if not membership:
        raise HTTPException(
            status_code=404,
            detail="Membership not found"
        )

    db.delete(membership)
    db.commit()

    return {
        "message": "Membership deleted successfully"
    }