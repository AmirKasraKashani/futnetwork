from fastapi import APIRouter
from controllers import leagues
from controllers import nations, nations, players, clubs, images


router= APIRouter(
    prefix= "/api"
)

router.include_router(leagues.router, tags= ["leagues"])
router.include_router(nations.router, tags= ["nations"])
router.include_router(players.router, tags= ["players"])
router.include_router(clubs.router, tags= ["clubs"])
router.include_router(images.router, tags= ["images"])

