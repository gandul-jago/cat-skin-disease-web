import re

from .chunker import create_chunks


def retrieve_disease(disease_name):
    chunks = create_chunks()

    disease_name = disease_name.strip().lower()

    for chunk in chunks:
        match = re.search(r"^## (.+)$", chunk, re.MULTILINE)

        if not match:
            continue

        chunk_disease = match.group(1).strip().lower()

        if chunk_disease == disease_name:
            return parse_disease(chunk)

    return None


def parse_disease(chunk):
    disease = re.search(
        r"^## (.+)$",
        chunk,
        re.MULTILINE,
    )

    description = re.search(
        r"### Description\s*(.*?)(?=\n\s*### |\Z)",
        chunk,
        re.DOTALL,
    )

    symptoms = re.search(
        r"### Symptoms\s*(.*?)(?=\n\s*### |\Z)",
        chunk,
        re.DOTALL,
    )

    causes = re.search(
        r"### Causes\s*(.*?)(?=\n\s*### |\Z)",
        chunk,
        re.DOTALL,
    )

    prevention = re.search(
        r"### Prevention\s*(.*?)(?=\n\s*### |\Z)",
        chunk,
        re.DOTALL,
    )

    return {
        "disease": disease.group(1).strip() if disease else "",
        "description": clean_text(
            description.group(1) if description else ""
        ),
        "symptoms": parse_list(
            symptoms.group(1) if symptoms else ""
        ),
        "causes": parse_list(
            causes.group(1) if causes else ""
        ),
        "prevention": parse_list(
            prevention.group(1) if prevention else ""
        ),
    }


def parse_list(text):
    lines = text.strip().splitlines()

    items = []

    for line in lines:
        line = line.strip()

        if line.startswith("- "):
            items.append(line[2:].strip())
        elif line:
            items.append(line)

    return items


def clean_text(text):
    return text.strip()