#!/bin/bash
set -e

echo "🚀 Starting deployment..."

# Pull latest changes from git repository
if [ -d .git ]; then
    echo "📥 Pulling latest git changes..."
    git pull origin main || git pull
fi

# Build and restart containers with zero/minimal downtime
echo "📦 Building and starting Docker container..."
docker compose build --pull
docker compose up -d --remove-orphans

# Clean up dangling images to save VPS disk space
echo "🧹 Cleaning unused Docker images..."
docker image prune -f

echo "✅ Deployment completed successfully!"
