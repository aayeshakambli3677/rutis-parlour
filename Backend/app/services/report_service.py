from sqlalchemy.orm import Session
from sqlalchemy import func

from app.models.billing import Billing
from app.models.appointment import Appointment
from app.models.customer import Customer


def get_dashboard_report(db: Session):
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


def get_revenue_report(db: Session):
    total_revenue = db.query(
        func.coalesce(func.sum(Billing.total_amount), 0)
    ).scalar()

    return {
        "total_revenue": float(total_revenue)
    }


def get_billing_report(db: Session):
    total_bills = db.query(Billing).count()

    total_revenue = db.query(
        func.coalesce(func.sum(Billing.total_amount), 0)
    ).scalar()

    return {
        "total_bills": total_bills,
        "total_revenue": float(total_revenue)
    }


def get_appointment_report(db: Session):
    total_appointments = db.query(Appointment).count()

    return {
        "total_appointments": total_appointments
    }


def get_customer_report(db: Session):
    total_customers = db.query(Customer).count()

    return {
        "total_customers": total_customers
    }