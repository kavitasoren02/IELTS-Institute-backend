# Backend — IELTS Institute

Stack: **Node.js + Express + MongoDB (Mongoose)**  
Language: **JavaScript (Node)**

## Quick start (backend)
```bash
git clone https://google.com
```

```bash
cd backend
```

```bash
npm install
```

```bash
# create .env in backend/
# MONGODB_URI=mongodb+srv://<user>:<pass>@<cluster>/<db>?retryWrites=true&w=majority
# PORT=5000
```

```bash
npm run dev
```

## Project structure (suggested)
```
backend/
├─ package.json
├─ .env
├─ src/
│  ├─ server.js
│  ├─ models/
│  │  ├─ Enrollment.js
│  │  └─ Testimonial.js
│  ├─ routes/
│  │  ├─ enrollments.js
│  │  └─ testimonials.js
│  └─ config/
│     └─ config.js
└─ README.md
```

## Notes & security
- Never commit `.env` with credentials.
- Consider rate-limiting and CORS config for production.
