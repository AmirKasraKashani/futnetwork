from fastapi import APIRouter
from models.clubs import clubs
import json

router = APIRouter()

@router.get(
    "/clubs",
    tags=["clubs"],
    summary="get all clubs"
)
async def getClubs(league: int= None):
    response = []
    if league == None:
        for club in clubs.objects():
            id = club["id"]
            response.append({
                "id": id,
                "image": f"/content/images/clubs/{id}",
                "name": club["name"]
            })
    else:
        for club in clubs.objects(league= league):
            id = club["id"]
            response.append({
                "id": id,
                "image": f"/content/images/clubs/{id}",
                "name": club["name"]
            })
    return response