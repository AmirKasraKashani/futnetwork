from fastapi import APIRouter
from models.players import players
import json

router = APIRouter()

@router.get(
    "/players",
    tags=["players"],
    summary="get all players"
)
async def getPlayers(club: int= None, nation: int= None):
    response = []
    objects = None
    if club == None:
        objects= players.objects()
    elif club != None and nation == None:
        objects= players.objects(club= club)
    elif club != None and nation != None:
        objects= players.objects(club= club, nation= nation)
    for player in objects:
        id= player["id"]
        response.append({
            "id": player["id"],
            "club": player["club"],
            "league": player["league"],
            "nation": player["nation"],
            "name": player["name"],
            "height": player["height"],
            "weight": player["weight"],
            "age": player["age"],
            "pace": player["pace"],
            "shooting": player["shooting"],
            "passing": player["passing"],
            "dribbling": player["dribbling"],
            "defending": player["defending"],
            "image": f"/content/images/players/{id}"

        })
    return response