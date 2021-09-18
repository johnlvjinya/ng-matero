import uvicorn
from typing import Optional
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json


import json
from datetime import datetime
app = FastAPI()

origins = [
    "http://127.0.0.1",
    "http://127.0.0.1:4200",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def read_root():
    return {"Hello": "World"}

@app.get("/dash_stats")
async def dash_stats():
    stats = [
        {
          "title": 'Total Sales',
          "amount": '180,202',
          "progress": {
            "value": 50,
          },
          "color": 'bg-indigo-500',
        },
        {
          "title": 'Revenue',
          "amount": '70,205',
          "progress": {
            "value": 70,
          },
          "color": 'bg-blue-500',
        },
        {
          "title": 'Traffic',
          "amount": '1,291,922',
          "progress": {
            "value": 80,
          },
          "color": 'bg-green-500',
        },
        {
          "title": 'New User',
          "amount": '1,922',
          "progress": {
            "value": 40,
          },
          "color": 'bg-teal-500',
        },
    ]
    return {"stats":stats}


@app.get("/items/{item_id}")
async def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}




if __name__ == '__main__':
    uvicorn.run(app='main:app', host="0.0.0.0", port=8000,reload=True,debug=True)