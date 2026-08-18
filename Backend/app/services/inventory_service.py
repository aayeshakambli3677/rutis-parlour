from sqlalchemy.orm import Session

from app.models.inventory import Inventory
from app.schemas.inventory import InventoryCreate, InventoryUpdate


def create_inventory(db: Session, inventory_data: InventoryCreate):
    new_inventory = Inventory(**inventory_data.model_dump())

    db.add(new_inventory)
    db.commit()
    db.refresh(new_inventory)

    return new_inventory


def get_all_inventory(db: Session):
    return db.query(Inventory).all()


def get_inventory_by_id(db: Session, inventory_id: int):
    return db.query(Inventory).filter(
        Inventory.id == inventory_id
    ).first()


def update_inventory(
    db: Session,
    inventory_id: int,
    inventory_data: InventoryUpdate
):
    inventory = get_inventory_by_id(db, inventory_id)

    if not inventory:
        return None

    update_data = inventory_data.model_dump(
        exclude_unset=True
    )

    for key, value in update_data.items():
        setattr(inventory, key, value)

    db.commit()
    db.refresh(inventory)

    return inventory


def delete_inventory(db: Session, inventory_id: int):
    inventory = get_inventory_by_id(db, inventory_id)

    if not inventory:
        return None

    db.delete(inventory)
    db.commit()

    return inventory


def get_low_stock_products(db: Session):
    return db.query(Inventory).filter(
        Inventory.quantity <= Inventory.low_stock_limit
    ).all()