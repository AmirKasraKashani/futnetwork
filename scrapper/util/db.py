from pymongo import MongoClient


class Db:
    def __init__(self):
        client= MongoClient('127.0.0.1', 27017)
        db = client["futdb"]
        self.leagues= db["leagues"]
        self.clubs= db["clubs"]
        self.nations= db["nations"]
        self.players= db["players"]

    def updateLeague(self, league):
        self.leagues.update_one({"id": league["id"]}, {"$set": league}, True)
     
    def updateNation(self, nation):
        self.nations.update_one({"id": nation["id"]}, {"$set": nation}, True)
    
    def updateClub(self, club):
        self.clubs.update_one({"id": club["id"]}, {"$set": club}, True)

    def updatePlayer(self, player):
        self.players.update_one({"id": player["id"]}, {"$set": player}, True)
    
    def fetchPlayers(self):
        return list(self.players.find({}))