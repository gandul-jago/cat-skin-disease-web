import io

from fastapi import UploadFile, HTTPException
from PIL import Image, UnidentifiedImageError


ALLOWED_TYPES = {
    "image/jpeg",
    "image/png",
}

MAX_FILE_SIZE = 5 * 1024 * 1024  # 5 MB


def validate_image_signature(
    image_bytes: bytes,
    content_type: str
) -> bool:

    if content_type == "image/jpeg":
        return image_bytes.startswith(b"\xff\xd8\xff")

    if content_type == "image/png":
        return image_bytes.startswith(
            b"\x89PNG\r\n\x1a\n"
        )

    return False


async def validate_upload(image: UploadFile) -> bytes:


    if image.content_type not in ALLOWED_TYPES:
        raise HTTPException(
            status_code=400,
            detail="Only JPG, JPEG, and PNG images are allowed."
        )

  

    image_bytes = await image.read()

    if not image_bytes:
        raise HTTPException(
            status_code=400,
            detail="Uploaded file is empty."
        )


    if len(image_bytes) > MAX_FILE_SIZE:
        raise HTTPException(
            status_code=413,
            detail="Image size must not exceed 5 MB."
        )


    if not validate_image_signature(
        image_bytes,
        image.content_type
    ):
        raise HTTPException(
            status_code=400,
            detail="Invalid image file."
        )

    try:
        image_file = Image.open(
            io.BytesIO(image_bytes)
        )

        image_file.verify()

    except (UnidentifiedImageError, OSError):
        raise HTTPException(
            status_code=400,
            detail="Invalid or corrupted image file."
        )

    return image_bytes