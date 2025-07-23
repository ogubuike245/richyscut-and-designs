# Render Deployment Guide

## Case Sensitivity Fix

The error you encountered was due to a case sensitivity issue in file paths. Windows file systems are case-insensitive, but Linux-based systems (like Render) are case-sensitive.

The issue has been fixed by updating the import statement in `routes/bookings.js` to use the correct case:

```javascript
// Changed from
import Booking from "../models/booking.js";

// To
import Booking from "../models/Booking.js";
```

## Deployment Steps for Render

1. **Create a New Web Service**
   - Log in to your Render dashboard
   - Click "New" and select "Web Service"
   - Connect your GitHub repository

2. **Configure the Service**
   - **Name**: Choose a name for your service
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Plan**: Select an appropriate plan (Free tier is available)

3. **Set Environment Variables**
   - Click on "Environment" tab
   - Add the following variables:
     - `MONGODB_URI`: Your MongoDB connection string
     - `PORT`: 10000 (Render will automatically set this, but you can specify it)
     - `NODE_ENV`: production
     - `FRONTEND_URL`: Your frontend URL
     - `VERCEL_FRONTEND_URL`: Your Vercel frontend URL (if applicable)

4. **Deploy**
   - Click "Create Web Service"
   - Wait for the build and deployment to complete

## Troubleshooting

### Case Sensitivity Issues

If you encounter more case sensitivity issues, check all import statements in your code. Make sure the case of the imported file matches exactly with the actual filename.

Common places to check:
- Import statements in route files
- Import statements in model files
- Import statements in middleware files

### MongoDB Connection Issues

If you have issues connecting to MongoDB:
- Ensure your MongoDB Atlas cluster allows connections from anywhere (0.0.0.0/0)
- Verify your connection string is correct
- Check that your MongoDB user has the correct permissions

### CORS Issues

If you encounter CORS issues:
- Ensure your frontend URL is correctly set in the environment variables
- The CORS configuration in server.js is set to allow all origins (`*`), which should work for development
- For production, you might want to restrict it to specific origins

## Monitoring and Logs

Render provides logs for your deployments. If you encounter issues:
1. Go to your Web Service in the Render dashboard
2. Click on "Logs" to view the server logs
3. Look for any error messages that might help diagnose the issue