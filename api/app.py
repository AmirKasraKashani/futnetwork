import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from config.router import router

def connectDb():
    try:
        from config import mongo
    except: 
        print("connection to db failed")
        exit()


app = FastAPI(
    title= "FutDB",
    version= "v1",
    debug= True,
    on_startup= [connectDb]
)
app.add_middleware(
    CORSMiddleware,
    allow_origins= ["*"],
    allow_credentials= True,
    allow_methods= ["*"],
    allow_headers= ["*"],
)
app.include_router(router)

if __name__ == "__main__":
    uvicorn.run(app, host= "0.0.0.0", port= 4540)