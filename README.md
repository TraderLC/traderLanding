# TraderLC Landing Page

Modern landing page for [TraderLC](https://traderlc.com), built with Next.js 16 (App Router), React 19, Tailwind CSS, and Framer Motion.

---

## 🚀 Quick Start (Local Development)

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 🐳 Docker Deployment (VPS)

### Port & Network Architecture

| Setting | Value |
| :--- | :--- |
| **External Port (Host)** | `7100` |
| **Internal Port (Container)** | `7000` |
| **Docker Network** | `traderlc_network` |
| **RAM Limit** | `512MB` (with 128MB reservation) |
| **Restart Policy** | `always` |

---

### Step-by-Step VPS Deployment

#### 1. Clone Repository on VPS
```bash
git clone <repo-url> /var/www/traderLanding
cd /var/www/traderLanding
```

#### 2. Configure Environment
```bash
make setup-env
# Or manually: cp .env.example .env
```

#### 3. Build & Start with Makefile
```bash
make up
```

#### 4. Configure Nginx Reverse Proxy & SSL
```bash
# Automated setup via Makefile:
make setup-nginx

# Issue free SSL certificate with Let's Encrypt:
sudo certbot --nginx -d traderlc.com -d www.traderlc.com
```

---

## 🛠️ Makefile Commands

| Command | Action |
| :--- | :--- |
| `make up` / `make start` | Build and start the container in detached mode |
| `make down` / `make stop` | Stop and remove the containers |
| `make restart` | Restart the container |
| `make logs` | View and follow container logs in real time |
| `make ps` / `make status` | Check container health and running status |
| `make deploy` | Pull latest code, rebuild, and redeploy on VPS |
| `make clean` | Prune unused dangling Docker images |
| `make shell` | Open an interactive shell inside the container |
| `make setup-nginx` | Install Nginx configuration on VPS |

---

## 🔄 Updating in Production

To deploy code updates in production:
```bash
make deploy
```
