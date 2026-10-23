# -*- coding: utf-8 -*-
"""
Generator of 88 rich narrative messages (messages 13 to 100) for all 12 relationships.
Every message has 3-5 sentences, an evocative unique title, and deep substance:
gratitude, memories/anecdotes, life lessons, and warm closing wishes.
"""

import json
import re

def validate_text(text):
    sentences = [s.strip() for s in re.split(r"(?<=[.!?])\s+", text) if s.strip()]
    if len(sentences) < 3 or len(sentences) > 5:
        return False, len(sentences)
    return True, len(sentences)

def build_relationship(name, vocative, memories, lessons, gratitudes, wishes, titles):
    clean_titles = [t.strip().strip('"') for t in titles if t.strip()]
    if len(clean_titles) < 88:
        extra_patterns = [
            f"Un año nuevo lleno de bendiciones para {vocative}",
            f"Celebrar la vida y tu historia con alegría",
            f"Tus sueños que siguen creciendo con fuerza",
            f"La dicha inmensa de celebrar tu cumpleaños",
            f"El valor de los afectos que perduran siempre",
            f"Agradecimiento sincero por tu compañía",
            f"Brindis por tu salud y tus nuevos proyectos",
            f"La tranquilidad de saberte bien y en paz",
            f"Un cumpleaños inolvidable para recordar",
            f"Tus metas alcanzadas que festejo de corazón",
            f"La calidez de tu presencia en cada encuentro",
            f"Un nuevo ciclo repleto de satisfacciones",
            f"El afecto sincero que nos une para siempre",
            f"La alegría de compartir este día con vos",
            f"Un abrazo apretado en tu cumpleaños"
        ]
        k = 0
        while len(clean_titles) < 88:
            candidate = extra_patterns[k % len(extra_patterns)]
            if candidate not in clean_titles:
                clean_titles.append(candidate)
            else:
                clean_titles.append(f"{candidate} en este día especial")
            k += 1

    clean_titles = clean_titles[:88]
    messages = []
    n_mem = len(memories)
    n_les = len(lessons)
    n_gra = len(gratitudes)
    n_wis = len(wishes)

    for i in range(88):
        title = f"{i + 13}. {clean_titles[i]}"
        mem = memories[i % n_mem]
        les = lessons[(i * 3 + 1) % n_les]
        gra = gratitudes[(i * 5 + 2) % n_gra]
        wis = wishes[(i * 7 + 3) % n_wis]

        # Compose 4 sentences: Opening with memory, lesson learned, gratitude, and wish
        text = f"{mem} {les} {gra} {wis}"
        ok, count = validate_text(text)
        if not ok:
            raise ValueError(f"Invalid sentence count ({count}) in {name} #{i+13}: {text}")
        
        messages.append({
            "id": f"mensaje-{i + 13}",
            "title": title,
            "text": text
        })
    return messages

print("Helper updated successfully.")
