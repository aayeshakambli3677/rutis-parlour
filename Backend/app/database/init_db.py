from app.database.database import engine, Base

from app.models.user import User
from app.models.customer import Customer
from app.models.beauty_profile import BeautyProfile


def init_db():
    Base.metadata.create_all(bind=engine)


if __name__ == "__main__":
    init_db()
    print("Database tables created successfully.")