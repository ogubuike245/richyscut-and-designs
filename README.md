# RICHYS CUTS & DESIGNS - Digital Queue Management System

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg)](#)

A comprehensive digital barbershop and tailoring studio management platform built with React, featuring an intelligent queue system that seamlessly integrates online bookings with walk-in customers. This modern solution eliminates wait times, improves customer experience, and streamlines both barbering and tailoring operations.

## 🚀 Key Features

### Customer Experience
- **Same-Day Online Booking**: Streamlined booking system for current day appointments
- **Mixed Queue Visibility**: Real-time view of both online and walk-in customers
- **Time Slot Management**: Available slots from 10:00 AM to 6:30 PM
- **Automatic Booking Cutoff**: Online booking closes at 6:30 PM
- **Service Selection**: Multiple barbering and tailoring services with pricing
- **Queue Position Tracking**: Live updates on customer position

### Business Management
- **Unified Dashboard**: Comprehensive admin panel for queue management
- **Walk-in Customer Integration**: Easy addition of walk-in customers to the queue
- **Real-time Statistics**: Daily revenue tracking and customer metrics
- **Customer Type Indicators**: Visual distinction between online and walk-in customers
- **Queue Operations**: Call next, serve customer, and clear queue functionality

### Technical Features
- **Responsive Design**: Mobile-first approach with cross-device compatibility
- **Modern UI/UX**: Clean, professional interface with intuitive navigation
- **Real-time Updates**: Dynamic queue status without page refresh
- **Form Validation**: Comprehensive input validation and error handling
- **Accessibility**: WCAG compliant design for inclusive user experience

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed on your development machine:

- **Node.js** (version 16.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (version 8.0.0 or higher) or **yarn** (version 1.22.0 or higher)
- **Git** for version control

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd barbershop-template
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**:
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Access the application**:
   - Open your browser and navigate to `http://localhost:3000`
   - The application will automatically reload when you make changes

### 🔐 Admin Access

To access the admin dashboard:
- **URL**: `http://localhost:3000/login`
- **Username**: `admin`
- **Password**: `password`

> **Note**: Change these credentials in a production environment for security.

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode on `http://localhost:3000` |
| `npm run build` | Builds the app for production to the `build` folder |
| `npm test` | Launches the test runner in interactive watch mode |
| `npm run eject` | **One-way operation** - Ejects from Create React App |

## 📁 Project Structure

```
barbershop-template/
├── public/
│   ├── index.html              # Main HTML template
│   └── _redirects              # Netlify redirect rules
├── src/
│   ├── components/
│   │   ├── Header.js           # Navigation header component
│   │   ├── Home.js             # Landing page component
│   │   ├── Queue.js            # Customer booking interface
│   │   ├── Gallery.js          # Portfolio showcase
│   │   ├── Contact.js          # Contact information
│   │   ├── Login.js            # Admin authentication
│   │   ├── Dashboard.js        # Admin queue management
│   │   └── Footer.js           # Site footer
│   ├── assets/
│   │   └── images/             # Static image assets
│   ├── App.js                  # Main application component
│   ├── App.css                 # Global styles and component CSS
│   ├── index.js                # Application entry point
│   └── index.css               # Base CSS styles
├── package.json                # Project dependencies and scripts
└── README.md                   # Project documentation
```

## 🏗️ Architecture Overview

### Component Hierarchy
```
App
├── Header (Navigation)
├── Routes
│   ├── Home (Landing Page)
│   ├── Queue (Customer Interface)
│   │   ├── Service Selection
│   │   ├── Time Selection
│   │   ├── Customer Information
│   │   └── Queue Display
│   ├── Gallery (Portfolio)
│   ├── Contact (Information)
│   ├── Login (Authentication)
│   └── Dashboard (Admin Panel)
│       ├── Statistics Overview
│       ├── Queue Management
│       ├── Walk-in Addition
│       └── Customer Operations
└── Footer
```

### State Management
- **Global State**: Managed in `App.js` using React hooks
- **Queue Data**: Array of customer objects with type indicators
- **Authentication**: Simple boolean state for admin access
- **Form State**: Local component state for user inputs

## 🛠️ Technologies Used

| Technology | Version | Purpose |
|------------|---------|----------|
| **React** | 18.2.0 | Frontend framework |
| **React Router DOM** | 6.3.0 | Client-side routing |
| **CSS3** | - | Styling with Grid/Flexbox |
| **JavaScript ES6+** | - | Modern JavaScript features |
| **Create React App** | 5.0.1 | Build toolchain |

## 🚀 Deployment

### Production Build
```bash
npm run build
```
This creates an optimized `build` folder ready for deployment.

### Deployment Options

#### Netlify (Recommended)
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on git push

#### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`
3. Follow the prompts

#### Traditional Hosting
1. Run `npm run build`
2. Upload the `build` folder contents to your web server
3. Configure server to serve `index.html` for all routes

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
REACT_APP_SHOP_NAME=RICHYS CUTS & DESIGNS
REACT_APP_CONTACT_PHONE=+234-XXX-XXX-XXXX
REACT_APP_CONTACT_EMAIL=info@richyscutsanddesigns.com
```

### Customization
- **Branding**: Update colors and fonts in `App.css`
- **Services**: Modify the services array in `Queue.js`
- **Business Hours**: Update time slots in `Queue.js`
- **Pricing**: Adjust service prices in the services configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact: [your-email@domain.com]
- Documentation: [Link to detailed docs]

---

**Built with ❤️ for modern barbershop management**
