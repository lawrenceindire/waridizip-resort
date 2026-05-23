WaridiZip Ventures Resorts

Full Stack Hotel Booking Website with Room Reservation and Food Ordering System.

## Features

- User Registration and Login (JWT Authentication)
- Browse and Book Rooms
- Food Ordering System
- Admin Dashboard
- MongoDB Database
- Responsive React Frontend

## Tech Stack

- Frontend: React + Vite
- Backend: Node.js + Express
- Database: MongoDB Atlas
- Authentication: JWT

## Project Structure
waridizip-resort/
├── backend/
│   ├── server.js
│   ├── models/
│   ├── routes/
│   └── .env
├── frontend/
│   ├── src/
│   └── package.json
├── .gitignore
└── README.md
## How To Run Locally

### Backend
```bash
cd backend
npm install
npm run dev
Frontend
cd frontend
npm install
npm run dev
Environment Variables (.env)
PORT=5000
MONGO_URI=mongodb+srv://waridizip_admin:HotelBooking2024Secure@cluster0.mongodb.net/waridizip
JWT_SECRET=waridizipsecretkey
API Endpoints
Backend: http://localhost:5000
Frontend: http://localhost:5173
Deployment
Backend: Railway, Render, or Cyclic
Frontend: Vercel or Netlify
Made for WaridiZip Ventures Resorts
---

Copy the content above (from `# WaridiZip...` to the end), then run these commands in Termux:

```bash
cd \~/waridizip-resort
cat > README.md << 'EOT'
[PASTE THE CONTENT HERE]
EOT
Then:
git add README.md
git commit -m "Add README.md"
git push
