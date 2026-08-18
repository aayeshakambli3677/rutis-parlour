from fastapi import FastAPI

from app.routes.auth import router as auth_router
from app.routes.customers import (router as customer_router)
from app.routes.beauty_profiles import (router as beauty_profile_router)

app = FastAPI(
    title="Ruti's Parlour API"
)

app.include_router(auth_router)
app.include_router(customer_router)
app.include_router(beauty_profile_router)


@app.get("/")
def home():

    return {
        "message": "Ruti's Parlour Backend Running"
    }