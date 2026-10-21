#!/usr/bin/env bash
set -e

MSG="${1:-Actualización de contenido y mejoras en paracumpleanos.com}"

echo "==> Verificando estado del repositorio..."
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Error: no se detecta repositorio git local."
  exit 1
fi

echo "==> Verificando compilación..."
npm run build

echo "==> Preparando commit..."
git add .
if git diff --staged --quiet; then
  echo "No hay cambios pendientes para commitear."
else
  git commit -m "$MSG"
  echo "Commit creado con éxito: $MSG"
fi

if git remote get-url origin >/dev/null 2>&1; then
  echo "==> Enviando cambios a GitHub (rama main)..."
  git push -u origin main
  echo "✅ ¡Cambios sincronizados correctamente con GitHub y publicados para paracumpleanos.com!"
else
  echo "⚠️ El remoto 'origin' aún no está configurado."
  echo "Para configurarlo, ejecuta:"
  echo "  git remote add origin https://<GITHUB_TOKEN>@github.com/<TU_USUARIO>/<TU_REPO>.git"
  echo "  git push -u origin main"
fi
