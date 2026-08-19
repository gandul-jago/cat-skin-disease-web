import re
from pathlib import Path


KNOWLEDGE_PATH = Path(__file__).parent / "knowledge" / "cat_diseases.md"


def load_knowledge():
    with open(KNOWLEDGE_PATH, "r", encoding="utf-8") as file:
        return file.read()


def create_chunks():
    content = load_knowledge()


    chunks = re.split(r"(?=^## )", content, flags=re.MULTILINE)

    chunks = [
        chunk.strip()
        for chunk in chunks
        if chunk.strip().startswith("## ")
    ]

    return chunks