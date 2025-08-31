# Task-management-ap
Vexocore IT services Pvt Ltd 




# Task Manager App

A full-stack task management application with user authentication and CRUD operations.

## Features
- User authentication (JWT)
- Task management (Create, Read, Update, Delete)
- Status toggle (Pending/Completed)
- Responsive web interface
- Cross-platform mobile app (React Native)
- Push notifications (Firebase)

## Technologies
- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: JWT
- **Deployment**: Render (Backend), Vercel (Frontend)
- **Mobile**: React Native
- **Notifications**: Firebase Cloud Messaging

## Setup Instructions
### Backend
1. Clone repository
2. Navigate to backend directory
3. Install dependencies: `npm install`
4. Create `.env` file with:

5. Start server: `npm start`

### Frontend
1. Navigate to frontend directory
2. Install dependencies: `npm install`
3. Create `.env` file with:

4. 4. Start app: `npm start`

## API Endpoints
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/tasks` - Get user tasks
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## Deployment
- Backend: [Render URL](https://your-backend.onrender.com)
- Frontend: [Vercel URL](https://your-frontend.vercel.app)

## Demo Video
[Link to demo video]

## Mobile App
The React Native mobile app is available in the `mobile` directory. Follow the setup instructions in `mobile/README.md`.
