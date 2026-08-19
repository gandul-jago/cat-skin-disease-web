from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware

from .security.upload_validator import validate_upload
from .rag.retriever import retrieve_disease
from .predictor import predict_image

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:8080",
        "http://127.0.0.1:8080",
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "*",  # wildcard agar semua origin diizinkan
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/predict")
async def predict(image: UploadFile):



    image_bytes = await validate_upload(image)


    result = predict_image(image_bytes)


    disease_name = result["prediction"]

    disease_info = retrieve_disease(disease_name)


    if disease_info:
        result.update({
            "description": disease_info["description"],
            "symptoms": disease_info["symptoms"],
            "causes": disease_info["causes"],
            "prevention": disease_info["prevention"],
        })

    return result