from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.database.database import get_db

from app.models.beauty_profile import (
    BeautyProfile
)

from app.schemas.beauty_profile import (
    BeautyProfileCreate,
    BeautyProfileUpdate
)

router = APIRouter(
    prefix="/beauty-profiles",
    tags=["Beauty Profiles"]
)

@router.post("/")
def create_profile(
    profile: BeautyProfileCreate,
    db: Session = Depends(get_db)
):

    existing = (
        db.query(BeautyProfile)
        .filter(
            BeautyProfile.customer_id
            ==
            profile.customer_id
        )
        .first()
    )

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Profile already exists"
        )

    new_profile = BeautyProfile(
        customer_id=profile.customer_id,
        skin_type=profile.skin_type,
        hair_type=profile.hair_type,
        allergies=profile.allergies,
        preferred_beautician=profile.preferred_beautician,
        preferred_services=profile.preferred_services,
        notes=profile.notes
    )

    db.add(new_profile)

    db.commit()

    db.refresh(new_profile)

    return {
        "message":
        "Beauty profile created successfully"
    }

@router.get("/{customer_id}")
def get_profile(
    customer_id: int,
    db: Session = Depends(get_db)
):

    profile = (
        db.query(BeautyProfile)
        .filter(
            BeautyProfile.customer_id
            ==
            customer_id
        )
        .first()
    )

    if not profile:
        raise HTTPException(
            status_code=404,
            detail="Profile not found"
        )

    return profile

@router.put("/{customer_id}")
def update_profile(
    customer_id: int,
    profile_data: BeautyProfileUpdate,
    db: Session = Depends(get_db)
):

    profile = (
        db.query(BeautyProfile)
        .filter(
            BeautyProfile.customer_id
            ==
            customer_id
        )
        .first()
    )

    if not profile:
        raise HTTPException(
            status_code=404,
            detail="Profile not found"
        )

    profile.skin_type = profile_data.skin_type
    profile.hair_type = profile_data.hair_type
    profile.allergies = profile_data.allergies
    profile.preferred_beautician = profile_data.preferred_beautician
    profile.preferred_services = profile_data.preferred_services
    profile.notes = profile_data.notes

    db.commit()

    return {
        "message":
        "Profile updated successfully"
    }

@router.delete("/{customer_id}")
def delete_profile(
    customer_id: int,
    db: Session = Depends(get_db)
):

    profile = (
        db.query(BeautyProfile)
        .filter(
            BeautyProfile.customer_id
            ==
            customer_id
        )
        .first()
    )

    if not profile:
        raise HTTPException(
            status_code=404,
            detail="Profile not found"
        )

    db.delete(profile)

    db.commit()

    return {
        "message":
        "Profile deleted successfully"
    }