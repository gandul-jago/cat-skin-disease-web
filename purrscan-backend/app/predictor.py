import numpy as np
import tensorflow as tf
from PIL import Image
from io import BytesIO


MODEL_PATH = "models/cat_skin_efficientnetb0.keras"

CLASS_NAMES = [
    "Flea Allergy",
    "Health",
    "Ringworm",
    "Scabies",
]


# Load model sekali ketika server dijalankan
model = tf.keras.models.load_model(MODEL_PATH)


def predict_image(image_bytes: bytes):
    # Baca gambar
    image = Image.open(BytesIO(image_bytes)).convert("RGB")

    # Resize sesuai input EfficientNetB0
    image = image.resize((224, 224))

    # Ubah ke numpy
    image_array = np.array(image)

    # Tambahkan batch dimension
    image_array = np.expand_dims(image_array, axis=0)

    # Prediksi
    predictions = model.predict(image_array, verbose=0)[0]

    # Index probabilitas terbesar
    predicted_index = np.argmax(predictions)

    prediction = CLASS_NAMES[predicted_index]

    confidence = float(predictions[predicted_index] * 100)

    probabilities = [
        {
            "class_name": CLASS_NAMES[i],
            "confidence": round(float(predictions[i] * 100), 2)
        }
        for i in range(len(CLASS_NAMES))
    ]

    return {
        "prediction": prediction,
        "confidence": round(confidence, 2),
        "probabilities": probabilities
    }