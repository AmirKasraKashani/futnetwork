from fastapi import APIRouter
import io
from starlette.responses import StreamingResponse
from models.leagues import leagues
from models.clubs import clubs
from models.nations import nations
from models.players import players
import json

router = APIRouter()

@router.get(
    "/content/images/{section}/{id}",
    tags=["images"],
    summary="get image"
)
async def getImage(section: str, id: int):
    if section == "nations":
        for image in nations.objects(fieldId= id):
            image = image.image
    elif section == "leagues":
        for image in leagues.objects(fieldId= id):
            image = image.image
    elif section == "clubs":
        for image in clubs.objects(fieldId= id):
            image = image.image
    elif section == "players":
        for image in players.objects(fieldId= id):
            image = image.image
    return StreamingResponse(io.BytesIO(image), media_type="image/png")