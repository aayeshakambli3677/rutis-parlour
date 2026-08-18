from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func

from app.database import get_db
from app.models.billing import Billing
from app.models.appointment import Appointment
from app.models.customer import Customer


router = APIRouter(
    prefix="/reports",
    tags=["Reports"]
)


@router.get("/dashboard")
def dashboard_report(
    db: Session = Depends(get_db)
):
    total_customers = db.query(Customer).count()

    total_appointments = db.query(Appointment).count()

    total_bills = db.query(Billing).count()

    total_revenue = db.query(
        func.coalesce(func.sum(Billing.total_amount), 0)
    ).scalar()

    return {
        "total_customers": total_customers,
        "total_appointments": total_appointments,
        "total_bills": total_bills,
        "total_revenue": float(total_revenue)
    }


@router.get("/revenue")
def revenue_report(
    db: Session = Depends(get_db)
):
    total_revenue = db.query(
        func.coalesce(func.sum(Billing.total_amount), 0)
    ).scalar()

    return {
        "total_revenue": float(total_revenue)
    }


@router.get("/billing")
def billing_report(
    db: Session = Depends(get_db)
):
    bills = db.query(Billing).all()

    return {
        "total_bills": len(bills),
        "total_revenue": float(
            sum(bill.total_amount for bill in bills)
        )
    }


@router.get("/appointments")
def appointment_report(
    db: Session = Depends(get_db)
):
    total_appointments = db.query(Appointment).count()

    return {
        "total_appointments": total_appointments
    }


@router.get("/customers")
def customer_report(
    db: Session = Depends(get_db)
):
    total_customers = db.query(Customer).count()

    return {
        "total_customers": total_customers
    }