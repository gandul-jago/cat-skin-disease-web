# PurrScan

**PurrScan** is a web-based cat skin disease detection system that uses **deep learning** to classify cat skin conditions from uploaded images.

The system uses **EfficientNetB0** as the classification model and provides a web interface where users can upload a cat skin image and receive a predicted disease along with its confidence score.

## About

PurrScan was developed as a machine learning and web application project to implement an image classification model into a usable web-based system.

The model classifies cat skin images into four classes:

- **Flea Allergy**
- **Health**
- **Ringworm**
- **Scabies**

The application consists of a React frontend and a FastAPI backend. The backend handles image processing and model inference, while PostgreSQL is used to store prediction history.

## How It Works

```text
User
 │
 ▼
Upload Cat Image
 │
 ▼
React Web Interface
 │
 ▼
FastAPI
 │
 ▼
EfficientNetB0
 │
 ▼
Disease Prediction
 │
 ▼
Result + Confidence
```

## Tech Stack

- **Frontend:** React, Vite
- **Backend:** FastAPI, Python
- **Machine Learning:** TensorFlow, Keras, EfficientNetB0
- **Database:** PostgreSQL
- **Deployment:** Docker, VPS, Cloudflare

## Model

The classification model is based on **EfficientNetB0** and trained to recognize four cat skin conditions.

The dataset is processed through EDA, cleaning, train-test splitting, augmentation on the training data, and model training before evaluation. The training pipeline uses a two-stage approach consisting of frozen training followed by fine-tuning.

## Run Locally

Clone the repository:

```bash
git clone https://github.com/your-username/purrscan.git
cd purrscan
```

## Preview

![home](D:\cat-skin-disease-web\purrscan-frontend\src\assets\images\home.jpeg)

The prediction result displays the detected condition, confidence score,
symptoms, causes, and prevention information.

![result](D:\cat-skin-disease-web\purrscan-frontend\src\assets\images\result.jpeg)

## Disclaimer

PurrScan is developed for educational and research purposes. The prediction results are not intended to replace professional veterinary diagnosis.
