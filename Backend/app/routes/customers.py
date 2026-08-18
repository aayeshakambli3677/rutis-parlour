from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.database.database import get_db

from app.models.customer import Customer

from app.schemas.customer import (
    CustomerCreate
)

from app.schemas.customer import (
    CustomerCreate,
    CustomerUpdate
)

from app.models.user import User

from app.models.user import User

from app.models.beauty_profile import (
    BeautyProfile
)

from app.utils.auth_dependency import (
    get_current_user
)

from app.schemas.profile import CompleteProfile

router = APIRouter(
    prefix="/customers",
    tags=["Customers"]
)


@router.post("/")
def create_customer(
    customer: CustomerCreate,
    db: Session = Depends(get_db)
):

    existing_customer = (
        db.query(Customer)
        .filter(
            Customer.user_id ==
            customer.user_id
        )
        .first()
    )

    if existing_customer:
        raise HTTPException(
            status_code=400,
            detail="Customer already exists"
        )

    new_customer = Customer(
        user_id=customer.user_id,
        phone=customer.phone,
        gender=customer.gender,
        dob=customer.dob,
        address=customer.address
    )

    db.add(new_customer)

    db.commit()

    db.refresh(new_customer)

    return {
        "message":
        "Customer created successfully"
    }

@router.get("/")
def get_all_customers(
    db: Session = Depends(get_db)
):

    customers = db.query(Customer).all()

    return customers

@router.get("/{customer_id}")
def get_customer(
    customer_id: int,
    db: Session = Depends(get_db)
):

    customer = (
        db.query(Customer)
        .filter(Customer.id == customer_id)
        .first()
    )

    if not customer:
        raise HTTPException(
            status_code=404,
            detail="Customer not found"
        )

    return customer

@router.put("/{customer_id}")
def update_customer(
    customer_id: int,
    customer_data: CustomerUpdate,
    db: Session = Depends(get_db)
):

    customer = (
        db.query(Customer)
        .filter(Customer.id == customer_id)
        .first()
    )

    if not customer:
        raise HTTPException(
            status_code=404,
            detail="Customer not found"
        )

    customer.phone = customer_data.phone
    customer.gender = customer_data.gender
    customer.dob = customer_data.dob
    customer.address = customer_data.address

    db.commit()
    db.refresh(customer)

    return {
        "message":
        "Customer updated successfully"
    }

@router.delete("/{customer_id}")
def delete_customer(
    customer_id: int,
    db: Session = Depends(get_db)
):

    customer = (
        db.query(Customer)
        .filter(Customer.id == customer_id)
        .first()
    )

    if not customer:
        raise HTTPException(
            status_code=404,
            detail="Customer not found"
        )

    db.delete(customer)

    db.commit()

    return {
        "message":
        "Customer deleted successfully"
    }

@router.get("/search/{name}")
def search_customer(
    name: str,
    db: Session = Depends(get_db)
):

    customers = (
        db.query(Customer)
        .join(User)
        .filter(
            User.full_name.ilike(
                f"%{name}%"
            )
        )
        .all()
    )

    return customers

@router.get(
    "/profile/me",
    response_model=CompleteProfile
)
def my_profile(

    current_user=Depends(
        get_current_user
    ),

    db: Session = Depends(get_db)

):

    user = (
        db.query(User)
        .filter(
            User.id ==
            current_user["user_id"]
        )
        .first()
    )

    customer = (
        db.query(Customer)
        .filter(
            Customer.user_id ==
            user.id
        )
        .first()
    )

    beauty_profile = None

    if customer:

        beauty_profile = (
            db.query(BeautyProfile)
            .filter(
                BeautyProfile.customer_id
                ==
                customer.id
            )
            .first()
        )

    return {

        "user": user,

        "customer": customer,

        "beauty_profile":
        beauty_profile

    }

@router.get("/dashboard")
def customer_dashboard(

    current_user=Depends(
        get_current_user
    ),

    db: Session = Depends(get_db)

):

    user = (
        db.query(User)
        .filter(
            User.id ==
            current_user["user_id"]
        )
        .first()
    )

    customer = (
        db.query(Customer)
        .filter(
            Customer.user_id ==
            user.id
        )
        .first()
    )

    return {

        "customer_name":
        user.full_name,

        "email":
        user.email,

        "membership":
        "Not Assigned",

        "loyalty_points":
        0,

        "upcoming_appointments":
        0,

        "completed_services":
        0

    }

@router.get("/stats/summary")
def customer_stats(
    db: Session = Depends(get_db)
):

    total_customers = (
        db.query(Customer)
        .count()
    )

    male_customers = (
        db.query(Customer)
        .filter(
            Customer.gender == "Male"
        )
        .count()
    )

    female_customers = (
        db.query(Customer)
        .filter(
            Customer.gender == "Female"
        )
        .count()
    )

    return {

        "total_customers":
        total_customers,

        "male_customers":
        male_customers,

        "female_customers":
        female_customers

    }