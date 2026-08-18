from fastapi import FastAPI

from app.routes.auth import router as auth_router
from app.routes.customers import router as customer_router
from app.routes.beauty_profiles import router as beauty_profile_router

from app.routes.billing import router as billing_router
from app.routes.inventory import router as inventory_router
from app.routes.memberships import router as membership_router
from app.routes.coupons import router as coupon_router
from app.routes.feedback import router as feedback_router
from app.routes.reports import router as reports_router


app = FastAPI(
    title="Ruti's Parlour API"
)


# Existing routers
app.include_router(auth_router)
app.include_router(customer_router)
app.include_router(beauty_profile_router)


# New routers
app.include_router(billing_router)
app.include_router(inventory_router)
app.include_router(membership_router)
app.include_router(coupon_router)
app.include_router(feedback_router)
app.include_router(reports_router)


@app.get("/")
def home():
    return {
        "message": "Ruti's Parlour Backend Running"
    }