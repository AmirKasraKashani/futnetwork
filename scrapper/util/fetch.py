from util.db import Db
import requests
import base64

class Fetch():
    def __init__(self):
        self.db= Db()
        self.token= "3ae848a0-d5bc-48c1-950e-e697956ef898"
        self.url= "https://futdb.app/api"
        self.headers= {
            'accept': "application/json",
            'X-AUTH-TOKEN': self.token,
        }

    def fetchNations(self):
        for i in range(1, 9):
            res= requests.get(f"{self.url}/nations?page={i}&limit=99999", headers= self.headers)
            if res.status_code == 200 :
                for nation in res.json()["items"]:
                    id= nation["id"]
                    res= requests.get(f"{self.url}/nations/{id}/image", headers= self.headers)
                    image= res.content
                    nation["image"]= image
                    self.db.updateNation(nation)
    
    def fetchClubs(self):
        for i in range(1, 34):
            res= requests.get(f"{self.url}/clubs?page={i}&limit=99999", headers= self.headers)
            if res.status_code == 200 :
                for club in res.json()["items"]:
                    id= club["id"]
                    res= requests.get(f"{self.url}/clubs/{id}/image", headers= self.headers)
                    image= res.content
                    club["image"]= image
                    self.db.updateClub(club)

    def fetchLeagues(self):
        for i in range(1, 4):
            res= requests.get(f"{self.url}/leagues?page={i}&limit=99999", headers= self.headers)
            if res.status_code == 200 :
                for league in res.json()["items"]:
                    id= league["id"]
                    res= requests.get(f"{self.url}/leagues/{id}/image", headers= self.headers)
                    image= res.content
                    league["image"]= image
                    self.db.updateLeague(league)
    
    def fetchPlayers(self):
        for i in range(1, 883):
            res= requests.get(f"{self.url}/players?page={i}&limit=99999", headers= self.headers)
            if res.status_code == 200 :
                for player in res.json()["items"]:
                    self.db.updatePlayer({
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
                    })
        
    def fetchPlayersImages(self):
        for player in self.db.fetchPlayers():
            if "image" not in player:
                id= player["id"]
                res= requests.get(f"{self.url}/players/{id}/image", headers= self.headers)
                if res.status_code == 200:
                    image= res.content
                    player["image"]= image
                    self.db.updatePlayer(player)
                else:
                    print("token expire")
                    exit()