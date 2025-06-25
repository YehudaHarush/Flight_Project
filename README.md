# Flight Booker App

A complete flight reservation platform built using a modern tech stack. The system enables users to search for flights, view available options, and finalize bookings. It includes a RESTful API backend (Node.js + PostgreSQL), a responsive frontend (React), and uses Docker for container orchestration and GitHub Actions for CI/CD automation.

---

##  Key Features

* Search available flights by destination and date.
* Book selected flights with instant confirmation.
* Automated database migrations.
* Modern UI for a smooth user experience.
* Dockerized architecture for consistent deployments.

---

##  Tech Stack

* **Backend:** Node.js, Express, Sequelize (ORM)
* **Frontend:** React
* **Database:** PostgreSQL
* **DevOps:** Docker, Docker Compose, GitHub Actions
* **Testing:** Jest, Supertest, E2E testing

---
##  Project Layout

### Backend (Node.js)

```
/controllers        # Request handlers
/models             # Sequelize models (Flights, Bookings)
/routes             # Express API routes
/migrations         # DB migration files
/config             # DB & env configs
/Dockerfile         # Backend container config
/docker-compose.yml # Multi-service orchestration
```

### Frontend (React)

```
/public             # Static files
/src
  ├── components    # UI components
  ├── services      # API interactions
  └── App.js        # Entry point & routes
```

---

##  Getting Started

### Clone Repository

```bash
git clone https://github.com/yourusername/flight-assignment.git
cd flight-assignment
```

###  Backend Setup

#### Option A: Using Docker

```bash
cd backend
# Create a .env file with:
# DB_PROD_HOST=db
# DB_PROD_PORT=5432
# DB_PROD_USER=postgres
# DB_PROD_PASS=postgres
# DB_PROD_NAME=flight_booking_prod

docker-compose up --build
```

#### Option B: Local (No Docker)

```bash
cd backend
npm install
npm start  # App runs on http://localhost:3000
```

---

###  Migrate Database

Apply Sequelize migrations:

* With Docker:

```bash
docker exec -it flight-backend npx sequelize-cli db:migrate
```

* Without Docker:

```bash
npx sequelize-cli db:migrate
```

---

###  Database Access (Optional)

```bash
docker exec -it flight-db psql -U postgres
\dt  # List tables
```

Insert example data:

```sql
INSERT INTO "Flights" (name, departure, arrival, price, date, "createdAt", "updatedAt")
VALUES 
('Flight 1', 'NYC', 'LA', 200.00, '2024-01-15', now(), now()),
('Flight 2', 'LA', 'Chicago', 150.00, '2024-01-16', now(), now());
```

---

###  Running Tests

#### Backend Tests

```bash
cd backend
npm test
```

#### Frontend Tests

```bash
cd frontend
npm run test
```

---

## ⚙️ CI/CD Pipeline

This project uses **GitHub Actions** to:

* Run unit & integration tests.
* Build and deploy backend and frontend services.

Workflow config: `.github/workflows/ci.yml`

Trigger: On every `push` to `main`.

---

##  Deployment

* Deployment is configured via **Render** or any compatible hosting service.
* After successful pipeline execution, both frontend and backend are deployed automatically.

---

##  Contact

For any questions or contributions, feel free to open an issue or pull request.
