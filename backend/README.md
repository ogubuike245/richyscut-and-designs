# Richy's Cut and Designs - Backend API

A robust Node.js backend API for managing barbershop and tailoring bookings built with Express.js and MongoDB.

## 🚀 Features

- **Booking Management**: Create, read, update, and cancel customer bookings
- **Service Management**: Manage available barbering and tailoring services
- **Time Slot Availability**: Check available appointment slots
- **Data Validation**: Comprehensive input validation using Joi
- **Error Handling**: Robust error handling and logging
- **Rate Limiting**: API rate limiting for security
- **CORS Support**: Cross-origin resource sharing enabled
- **MongoDB Integration**: Efficient data storage with Mongoose ODM

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   MONGODB_URI=mongodb://localhost:27017/richyscut
   PORT=5000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:3000
   ```

4. **Start MongoDB**
   Make sure MongoDB is running on your system.

5. **Seed the database** (Optional)
   ```bash
   node scripts/seedServices.js
   ```

6. **Start the server**
   ```bash
   # Development mode with auto-restart
   npm run dev
   
   # Production mode
   npm start
   ```

The API will be available at `http://localhost:5000`

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Health Check
```http
GET /api/health
```

### 📅 Bookings Endpoints

#### Get All Bookings
```http
GET /api/bookings
```

**Query Parameters:**
- `status` - Filter by booking status (PENDING, CONFIRMED, etc.)
- `date` - Filter by appointment date (YYYY-MM-DD)
- `customerEmail` - Filter by customer email
- `serviceType` - Filter by service type
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10, max: 100)
- `sortBy` - Sort field (appointmentDate, createdAt, etc.)
- `sortOrder` - Sort order (asc, desc)

**Example:**
```http
GET /api/bookings?status=PENDING&date=2024-01-15&page=1&limit=10
```

#### Get Booking by ID
```http
GET /api/bookings/:id
```

#### Get Booking by Reference
```http
GET /api/bookings/reference/:reference
```

#### Create New Booking
```http
POST /api/bookings
Content-Type: application/json

{
  "customerName": "John Doe",
  "customerEmail": "john@example.com",
  "customerPhone": "+1234567890",
  "serviceType": "ADULT_HAIRCUT",
  "appointmentDate": "2024-01-15",
  "appointmentTime": "14:30",
  "notes": "Please use scissors only",
  "specialRequests": "Prefer shorter on the sides"
}
```

#### Update Booking
```http
PUT /api/bookings/:id
Content-Type: application/json

{
  "status": "CONFIRMED",
  "notes": "Updated notes"
}
```

#### Cancel Booking
```http
DELETE /api/bookings/:id
```

#### Check Availability
```http
GET /api/bookings/availability/:date
```

**Query Parameters:**
- `serviceDuration` - Service duration in minutes (default: 60)

**Example:**
```http
GET /api/bookings/availability/2024-01-15?serviceDuration=45
```

### 🛍️ Services Endpoints

#### Get All Services
```http
GET /api/services
```

**Query Parameters:**
- `category` - Filter by category (BARBERING, TAILORING)
- `popular` - Filter popular services (true/false)
- `sortBy` - Sort field (price, duration, name, category)
- `sortOrder` - Sort order (asc, desc)

#### Get Service by ID
```http
GET /api/services/:serviceId
```

#### Get Services by Category
```http
GET /api/services/category/:category
```

#### Get Popular Services
```http
GET /api/services/popular/list
```

## 📊 Data Models

### Booking Model
```javascript
{
  customerName: String,
  customerEmail: String,
  customerPhone: String,
  serviceType: String,
  serviceName: String,
  servicePrice: Number,
  serviceDuration: Number,
  appointmentDate: Date,
  appointmentTime: String,
  status: String, // PENDING, CONFIRMED, IN_PROGRESS, COMPLETED, CANCELLED, NO_SHOW
  notes: String,
  specialRequests: String,
  bookingReference: String,
  assignedStaff: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Service Model
```javascript
{
  serviceId: String,
  name: String,
  description: String,
  category: String, // BARBERING, TAILORING
  price: Number,
  duration: Number, // in minutes
  isActive: Boolean,
  isPopular: Boolean,
  requirements: [String],
  tags: [String],
  createdAt: Date,
  updatedAt: Date
}
```

## 🔧 Available Services

### Barbering Services
- **ADULT_HAIRCUT** - Adult Haircut ($25, 45min)
- **KIDS_HAIRCUT** - Kids Haircut ($18, 30min)
- **BEARD_TRIM** - Beard Trim & Styling ($15, 30min)

### Tailoring Services
- **SENATOR** - Senator Outfit ($120, 120min)
- **CASUAL_WEAR** - Casual Wear ($80, 90min)
- **CLOTHES_AMENDMENTS** - Clothes Amendments ($35, 60min)

## ⏰ Business Hours

- **Operating Hours**: 9:00 AM - 6:00 PM
- **Closed**: Sundays
- **Minimum Advance Booking**: 2 hours
- **Maximum Advance Booking**: 30 days

## 🛡️ Security Features

- **Rate Limiting**: 100 requests per 15 minutes per IP
- **Helmet.js**: Security headers
- **Input Validation**: Joi validation for all inputs
- **CORS**: Configured for frontend domain
- **Error Handling**: Sanitized error responses

## 📝 Response Format

### Success Response
```json
{
  "success": true,
  "data": {},
  "message": "Operation successful"
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description",
  "errors": ["Detailed error messages"]
}
```

### Pagination Response
```json
{
  "success": true,
  "data": [],
  "pagination": {
    "currentPage": 1,
    "totalPages": 5,
    "totalBookings": 50,
    "hasNext": true,
    "hasPrev": false
  }
}
```

## 🧪 Testing

### Using cURL

**Create a booking:**
```bash
curl -X POST http://localhost:5000/api/bookings \
  -H "Content-Type: application/json" \
  -d '{
    "customerName": "John Doe",
    "customerEmail": "john@example.com",
    "customerPhone": "+1234567890",
    "serviceType": "ADULT_HAIRCUT",
    "appointmentDate": "2024-01-15",
    "appointmentTime": "14:30"
  }'
```

**Get all services:**
```bash
curl http://localhost:5000/api/services
```

**Check availability:**
```bash
curl http://localhost:5000/api/bookings/availability/2024-01-15
```

## 🚀 Deployment

### Environment Variables for Production
```env
NODE_ENV=production
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/richyscut
PORT=5000
FRONTEND_URL=https://yourdomain.com
```

### PM2 Deployment
```bash
npm install -g pm2
pm2 start server.js --name "richyscut-api"
pm2 startup
pm2 save
```

## 📞 Support

For support and questions, please contact the development team or create an issue in the repository.

## 📄 License

This project is licensed under the MIT License.