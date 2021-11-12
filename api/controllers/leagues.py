from fastapi import APIRouter
from models.leagues import leagues
import json

router = APIRouter()

@router.get(
    "/leagues",
    tags=["leagues"],
    summary="get all leagues"
)
async def getLeagues():
    response = []
    for league in leagues.objects():
        id = league["id"]
        response.append({
            "id": id,
            "image": f"/content/images/leagues/{id}",
            "name": league["name"]
        })
    return response