from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.staff import Staff
from app.schemas.staff import (
    StaffCreate,
    StaffUpdate,
    StaffResponse
)


router = APIRouter(
    prefix="/staff",
    tags=["Staff"]
)


@router.post("/", response_model=StaffResponse)
def create_staff(
    staff: StaffCreate,
    db: Session = Depends(get_db)
):
    existing = db.query(Staff).filter(
        Staff.email == staff.email
    ).first()

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Staff with this email already exists"
        )

    new_staff = Staff(
        full_name=staff.full_name,
        email=staff.email,
        phone=staff.phone,
        role=staff.role,
        specialization=staff.specialization
    )

    db.add(new_staff)
    db.commit()
    db.refresh(new_staff)

    return new_staff


@router.get("/", response_model=list[StaffResponse])
def get_staff(
    db: Session = Depends(get_db)
):
    return db.query(Staff).all()


@router.get("/{staff_id}", response_model=StaffResponse)
def get_staff_by_id(
    staff_id: int,
    db: Session = Depends(get_db)
):
    staff = db.query(Staff).filter(
        Staff.id == staff_id
    ).first()

    if not staff:
        raise HTTPException(
            status_code=404,
            detail="Staff not found"
        )

    return staff


@router.put("/{staff_id}", response_model=StaffResponse)
def update_staff(
    staff_id: int,
    data: StaffUpdate,
    db: Session = Depends(get_db)
):
    staff = db.query(Staff).filter(
        Staff.id == staff_id
    ).first()

    if not staff:
        raise HTTPException(
            status_code=404,
            detail="Staff not found"
        )

    update_data = data.model_dump(exclude_unset=True)

    for key, value in update_data.items():
        setattr(staff, key, value)

    db.commit()
    db.refresh(staff)

    return staff


@router.delete("/{staff_id}")
def delete_staff(
    staff_id: int,
    db: Session = Depends(get_db)
):
    staff = db.query(Staff).filter(
        Staff.id == staff_id
    ).first()

    if not staff:
        raise HTTPException(
            status_code=404,
            detail="Staff not found"
        )

    db.delete(staff)
    db.commit()

    return {
        "message": "Staff deleted successfully"
    }