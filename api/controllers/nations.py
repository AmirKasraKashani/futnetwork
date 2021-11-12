from fastapi import APIRouter
from models.nations import nations
import json

router = APIRouter()

@router.get(
    "/nations",
    tags=["nations"],
    summary="get all nations"
)
async def getNations():
    response = []
    for nation in nations.objects():
        id = nation["id"]
        response.append({
            "id": id,
            "image": f"/content/images/nations/{id}",
            "name": nation["name"]
        })
    return response