from fastapi import FastAPI, UploadFile, Form
import pandas as pd

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Backend running"}

@app.post("/upload")
async def upload(file: UploadFile, email: str = Form(...)):
    df = pd.read_csv(file.file)

    total_revenue = df["Revenue"].sum()
    total_units = df["Units_Sold"].sum()

    summary = f"Total revenue: {total_revenue}, Total units sold: {total_units}"

    return {
        "summary": summary,
        "email": email
    }