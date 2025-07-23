# 💈 Richy's Cut & Designs - Digital Barbershop Management System

A modern, full-stack web application for barbershop booking and queue management, featuring a sleek React frontend and robust Express.js backend.

## 🌟 Project Overview

Richy's Cut & Designs is a comprehensive digital solution for barbershop management that includes:

- **Customer Booking System**: Easy-to-use interface for scheduling appointments
- **Queue Management**: Real-time queue tracking and management
- **Service Portfolio**: Showcase of available services and pricing
- **Admin Dashboard**: Complete management interface for staff
- **Responsive Design**: Mobile-first approach with modern UI/UX

## 🏗️ Architecture

This project follows a **monorepo structure** with separate frontend and backend applications:

```
richyscut-and-designs/
├── frontend/          # React.js application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components (Home, Queue, etc.)
│   │   ├── assets/        # Images, CSS, and static files
│   │   ├── hooks/         # Custom React hooks
│   │   ├── config/        # Configuration files
│   │   └── api.js         # API integration
│   ├── public/
│   └── package.json
├── backend/           # Express.js API server
│   ├── models/            # MongoDB data models
│   ├── routes/            # API route handlers
│   ├── middleware/        # Custom middleware
│   ├── server.js          # Main server file
│   └── package.json
└── README.md          # This file
```

## 🚀 Tech Stack

### Frontend
- **React 18.2.0** - Modern UI library
- **React Router DOM 6.3.0** - Client-side routing
- **CSS3** - Modern styling with Grid/Flexbox
- **Create React App** - Build tooling

### Backend
- **Node.js** - Runtime environment
- **Express.js 4.18.2** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose 8.0.3** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (version 16.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (version 8.0.0 or higher)
- **MongoDB** (version 4.4 or higher)
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd richyscut-and-designs
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Setup**
   ```bash
   cd ../backend
   cp .env.example .env
   # Edit .env file with your MongoDB connection string and other configs
   ```

### Running the Application

#### Development Mode

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   Backend will run on `http://localhost:5000`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm start
   ```
   Frontend will run on `http://localhost:3000`

#### Production Mode

1. **Build the Frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Start the Backend**
   ```bash
   cd backend
   npm start
   ```

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Key Endpoints

- **Health Check**: `GET /api/health`
- **Bookings**: `GET|POST|PUT|DELETE /api/bookings`
- **Services**: `GET /api/services`
- **Popular Services**: `GET /api/services/popular/list`

For detailed API documentation, see [Backend README](./backend/README.md)

## 🎨 Features

### Customer Features
- **Home Page**: Service overview and business information
- **Booking System**: Easy appointment scheduling
- **Service Gallery**: Portfolio showcase
- **Contact Information**: Location and contact details

### Admin Features
- **Dashboard**: Queue management and statistics
- **Booking Management**: View, edit, and manage appointments
- **Service Management**: Add/edit services and pricing

## 📁 Project Structure Details

### Frontend Structure
```
frontend/src/
├── components/        # Reusable UI components
├── pages/            # Main page components
│   ├── Home.js       # Landing page
│   ├── Queue.js      # Booking interface
│   └── Test.js       # Test/demo page
├── assets/           # Static assets
│   ├── css/          # Centralized CSS files
│   └── images/       # Image assets
├── hooks/            # Custom React hooks
├── config/           # Configuration files
└── api.js            # API integration layer
```

### Backend Structure
```
backend/
├── models/           # MongoDB schemas
│   └── Booking.js    # Booking data model
├── routes/           # API route handlers
│   └── bookings.js   # Booking endpoints
├── middleware/       # Custom middleware
└── server.js         # Main application entry
```

## 🔧 Development Workflow

### Code Organization
- **CSS Management**: All CSS files centralized in `frontend/src/assets/css/`
- **Component Structure**: Modular, reusable components
- **API Integration**: Centralized API calls in `api.js`
- **Routing**: React Router for client-side navigation

### Best Practices Implemented
- **Monorepo Structure**: Clean separation of concerns
- **Environment Configuration**: Secure environment variable management
- **Error Handling**: Comprehensive error handling on both ends
- **Security**: Helmet.js and CORS configuration
- **Code Quality**: Consistent code style and structure

## 🚀 Deployment

### Frontend Deployment
The frontend is optimized for deployment on platforms like:
- Netlify
- Vercel
- GitHub Pages

### Backend Deployment
The backend can be deployed on:
- Heroku
- Railway
- DigitalOcean
- AWS

## 📄 Documentation

- [Frontend Documentation](./frontend/README.md)
- [Backend Documentation](./backend/README.md)
- [Project Design Requirements](./frontend/PDR.md)
- [Theme Guide](./frontend/THEME_GUIDE.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./frontend/LICENSE) file for details.

## 📞 Support

For support and questions, please contact the development team or create an issue in the repository.

---

**Built with ❤️ for Richy's Cut & Designs**