# Lights Tracker — skeleton

This repo contains a minimal FastAPI backend and Vite+React frontend scaffold suitable for deploying to Render.

Quick local steps

1. Backend

```bash
cd lights-tracker/backend
python -m venv venv
# Windows:
venv\Scripts\activate
# mac/linux:
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Visit `http://127.0.0.1:8000/health` to verify.

2. Frontend

```bash
cd lights-tracker/frontend
npm install
npm run dev
```

Open the Vite dev URL (usually http://127.0.0.1:5173).

Git + Render

- Initialize a git repo at `lights-tracker/` and push to GitHub.
- On Render: create a Postgres database, then create a Web Service using `backend/` root (Python) and a Static Site using `frontend/` (build with `npm install && npm run build`, publish `dist`).
