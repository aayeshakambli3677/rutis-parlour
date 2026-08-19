from fastapi import FastAPI

from app.database.database import Base, engine

# Models
from app.models.user import User
from app.models.staff import Staff
from app.models.service import Service


# Existing routes
from app.routes.auth import router as auth_router
from app.routes.customers import router as customer_router
from app.routes.beauty_profiles import router as beauty_profile_router
from app.routes.billing import router as billing_router
from app.routes.inventory import router as inventory_router
from app.routes.memberships import router as membership_router
from app.routes.coupons import router as coupon_router
from app.routes.feedback import router as feedback_router
from app.routes.reports import router as reports_router


# New routes
from app.routes.staff import router as staff_router
from app.routes.services import router as services_router


app = FastAPI(
    title="Ruti's Parlour API"
)


# Create database tables
Base.metadata.create_all(bind=engine)


# Authentication
app.include_router(auth_router)


# Existing routers
app.include_router(customer_router)
app.include_router(beauty_profile_router)
app.include_router(billing_router)
app.include_router(inventory_router)
app.include_router(membership_router)
app.include_router(coupon_router)
app.include_router(feedback_router)
app.include_router(reports_router)


# Part 2 routers
app.include_router(staff_router)
app.include_router(services_router)


@app.get("/")
def home():
    return {
        "message": "Ruti's Parlour Backend Running"
    }