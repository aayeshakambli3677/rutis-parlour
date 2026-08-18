from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.inventory import Inventory
from app.schemas.inventory import (
    InventoryCreate,
    InventoryUpdate,
    InventoryResponse
)


router = APIRouter(
    prefix="/inventory",
    tags=["Inventory"]
)


@router.post("/", response_model=InventoryResponse)
def create_inventory(
    inventory: InventoryCreate,
    db: Session = Depends(get_db)
):
    new_inventory = Inventory(
        **inventory.model_dump()
    )

    db.add(new_inventory)
    db.commit()
    db.refresh(new_inventory)

    return new_inventory


@router.get("/", response_model=list[InventoryResponse])
def get_inventory(
    db: Session = Depends(get_db)
):
    return db.query(Inventory).all()


@router.get("/{inventory_id}", response_model=InventoryResponse)
def get_inventory_item(
    inventory_id: int,
    db: Session = Depends(get_db)
):
    item = db.query(Inventory).filter(
        Inventory.id == inventory_id
    ).first()

    if not item:
        raise HTTPException(
            status_code=404,
            detail="Inventory item not found"
        )

    return item


@router.put("/{inventory_id}", response_model=InventoryResponse)
def update_inventory(
    inventory_id: int,
    inventory_data: InventoryUpdate,
    db: Session = Depends(get_db)
):
    item = db.query(Inventory).filter(
        Inventory.id == inventory_id
    ).first()

    if not item:
        raise HTTPException(
            status_code=404,
            detail="Inventory item not found"
        )

    update_data = inventory_data.model_dump(
        exclude_unset=True
    )

    for key, value in update_data.items():
        setattr(item, key, value)

    db.commit()
    db.refresh(item)

    return item


@router.delete("/{inventory_id}")
def delete_inventory(
    inventory_id: int,
    db: Session = Depends(get_db)
):
    item = db.query(Inventory).filter(
        Inventory.id == inventory_id
    ).first()

    if not item:
        raise HTTPException(
            status_code=404,
            detail="Inventory item not found"
        )

    db.delete(item)
    db.commit()

    return {
        "message": "Inventory item deleted successfully"
    }


@router.get("/low-stock/items", response_model=list[InventoryResponse])
def get_low_stock_items(
    db: Session = Depends(get_db)
):
    return db.query(Inventory).filter(
        Inventory.quantity <= Inventory.low_stock_limit
    ).all()