# -*- coding: utf-8 -*-
"""
Master script to apply full narrative enrichment to all 12 relationships.
Replaces messages 13 to 100 with 88 deep narrative paragraphs (3-5 sentences each)
focused on gratitude, anecdotes, and life lessons.
"""

import json
import re

from scripts.rel_definitions_1 import get_mama, get_papa, get_pareja, get_hija
from scripts.rel_definitions_2 import get_hijo, get_lejos, get_hermano, get_primo
from scripts.rel_definitions_3 import get_tio, get_tia, get_abuelo, get_abuela

category_map = {
    "mensajes-de-cumpleanos-para-mama": get_mama(),
    "mensajes-de-cumpleanos-para-papa": get_papa(),
    "mensajes-de-cumpleanos-para-mi-pareja": get_pareja(),
    "mensajes-de-cumpleanos-para-una-hija": get_hija(),
    "mensajes-de-cumpleanos-para-un-hijo": get_hijo(),
    "mensajes-de-cumpleanos-para-alguien-lejos": get_lejos(),
    "mensajes-de-cumpleanos-para-un-hermano": get_hermano(),
    "mensajes-de-cumpleanos-para-un-primo": get_primo(),
    "mensajes-de-cumpleanos-para-un-tio": get_tio(),
    "mensajes-de-cumpleanos-para-una-tia": get_tia(),
    "mensajes-de-cumpleanos-para-un-abuelo": get_abuelo(),
    "mensajes-de-cumpleanos-para-una-abuela": get_abuela(),
}

with open("data/relationship_messages.json", "r", encoding="utf-8") as f:
    data = json.load(f)

total_updated = 0

for slug, new_messages in category_map.items():
    if slug not in data:
        raise ValueError(f"Category {slug} not found in json!")
    
    rel = data[slug]
    print(f"Enriching {rel['name']} ({slug})...")
    
    if len(new_messages) != 88:
        raise ValueError(f"{slug} has {len(new_messages)} messages instead of 88!")
    
    # Replace indices 12 to 99 (messages 13 to 100)
    for i, msg in enumerate(new_messages):
        target_idx = 12 + i
        rel["messages"][target_idx] = msg
        total_updated += 1

print(f"Total messages updated with rich narratives: {total_updated}")

# Full Audit Across All 1,908 Messages
print("\n--- Auditing all 1,908 messages ---")
total_msgs = 0
errors = 0

for slug, rel in data.items():
    titles_seen = set()
    for idx, m in enumerate(rel["messages"]):
        total_msgs += 1
        sentences = [s.strip() for s in re.split(r"(?<=[.!?])\s+", m["text"]) if s.strip()]
        
        # Check title uniqueness within category
        if m["title"] in titles_seen:
            print(f"DUPLICATE TITLE in {slug}: {m['title']}")
            errors += 1
        titles_seen.add(m["title"])
        
        # Check sentence count
        if len(sentences) < 3:
            print(f"TOO SHORT (<3 sentences) in {slug} #{idx+1}: {len(sentences)} sentences")
            errors += 1
        elif len(sentences) > 6:
            print(f"TOO LONG (>6 sentences) in {slug} #{idx+1}: {len(sentences)} sentences")
            errors += 1

if errors == 0:
    print(f"PERFECT! All {total_msgs} messages across 12 relationships passed validation!")
    with open("data/relationship_messages.json", "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print("Updated data/relationship_messages.json successfully written.")
else:
    print(f"Validation finished with {errors} errors. JSON not written.")
    exit(1)
