.PHONY: help build up down restart logs ps status deploy clean shell setup-env setup-nginx

# Default target
.DEFAULT_GOAL := help

help: ## Display this help message
	@echo "TraderLC Landing Page - Docker Management Commands"
	@echo "=================================================="
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

setup-env: ## Copy .env.example to .env if not exists
	@if [ ! -f .env ]; then \
		cp .env.example .env; \
		echo "Created .env from .env.example"; \
	else \
		echo ".env file already exists"; \
	fi

build: ## Build the Docker image
	@echo "Building Docker image..."
	docker compose build

up: setup-env ## Build and start the container in detached mode
	@echo "Ensuring traderlc_network exists..."
	@docker network create traderlc_network 2>/dev/null || true
	@echo "Starting container on port 7100 (internal 7000)..."
	docker compose up -d --build

start: up ## Alias for 'make up'

down: ## Stop and remove the containers
	@echo "Stopping container..."
	docker compose down

stop: down ## Alias for 'make down'

restart: ## Restart the running container
	@echo "Restarting container..."
	docker compose restart

logs: ## View and follow container logs
	docker compose logs -f app

ps: ## Check container status and health
	docker compose ps

status: ps ## Alias for 'make ps'

deploy: setup-env ## Pull latest changes, rebuild, and redeploy on VPS
	@echo "Starting automated deployment..."
	@if [ -d .git ]; then \
		echo "Pulling latest code..."; \
		git pull origin main || git pull origin master || git pull; \
	fi
	@echo "Ensuring traderlc_network exists..."
	@docker network create traderlc_network 2>/dev/null || true
	@echo "Building and updating container..."
	docker compose up -d --build --remove-orphans
	@echo "Cleaning up dangling images..."
	docker image prune -f
	@echo "Deployment complete! Status:"
	@docker compose ps

clean: ## Remove unused Docker images
	@echo "Cleaning unused images..."
	docker image prune -f

shell: ## Open a shell inside the running container
	docker compose exec app sh

setup-nginx: ## Copy Nginx config to /etc/nginx/sites-available/ (requires sudo)
	@echo "Setting up Nginx configuration..."
	sudo cp traderlc.com.conf /etc/nginx/sites-available/traderlc.com
	sudo ln -sf /etc/nginx/sites-available/traderlc.com /etc/nginx/sites-enabled/
	sudo nginx -t
	sudo systemctl reload nginx
	@echo "Nginx configured! Run 'sudo certbot --nginx -d traderlc.com -d www.traderlc.com' for SSL."
