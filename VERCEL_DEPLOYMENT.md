# Vercel Deployment Guide for Richy's Cut & Designs

This guide will help you deploy both the frontend and backend of Richy's Cut & Designs to Vercel.

## Prerequisites

1. A Vercel account
2. Git repository with your code
3. MongoDB Atlas account (for the database)

## Backend Deployment

### Step 1: Prepare Your Backend

The backend is already configured with the necessary files for Vercel deployment:
- `vercel.json` - Configuration for Vercel
- CORS settings in `server.js` to allow requests from the frontend

### Step 2: Deploy to Vercel

1. Log in to your Vercel account
2. Create a new project and import your repository
3. Configure the project:
   - Set the root directory to `backend`
   - Framework preset: Other
   - Build command: `npm install`
   - Output directory: Leave empty

4. Add the following environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `NODE_ENV`: `production`
   - `FRONTEND_URL`: Your local development URL (e.g., `http://localhost:3000`)
   - `VERCEL_FRONTEND_URL`: Your frontend Vercel deployment URL (e.g., `https://richyscut-and-designs-frontend.vercel.app`)

5. Deploy the project

## Frontend Deployment

### Step 1: Prepare Your Frontend

The frontend is already configured with the necessary files for Vercel deployment:
- `vercel.json` - Configuration for Vercel
- `.env.production` - Environment variables for production

### Step 2: Deploy to Vercel

1. Log in to your Vercel account
2. Create a new project and import your repository
3. Configure the project:
   - Set the root directory to `frontend`
   - Framework preset: Create React App
   - Build command: `npm run build`
   - Output directory: `build`

4. Add the following environment variables:
   - `REACT_APP_API_BASE_URL`: Your backend Vercel deployment URL + `/api` (e.g., `https://richyscut-and-designs-backend.vercel.app/api`)
   - `REACT_APP_FRONTEND_URL`: Your frontend Vercel deployment URL (e.g., `https://richyscut-and-designs-frontend.vercel.app`)

5. Deploy the project

## Troubleshooting

### CORS Issues

If you encounter CORS issues:

1. Make sure the backend environment variables `FRONTEND_URL` and `VERCEL_FRONTEND_URL` are correctly set to your frontend URL
2. Check the frontend environment variable `REACT_APP_API_BASE_URL` is correctly set to your backend URL + `/api`
3. Verify that the backend's CORS configuration in `server.js` includes your frontend URL

### 500 Internal Server Error

If the backend returns a 500 error:

1. Check the Vercel logs for the backend project
2. Verify that all environment variables are correctly set
3. Make sure the MongoDB connection string is correct and the database is accessible

### API Endpoints Not Found

If API endpoints return 404 errors:

1. Make sure you're including `/api` in the `REACT_APP_API_BASE_URL` environment variable
2. Check that the routes in `server.js` are correctly defined
3. Verify that the `vercel.json` file is correctly configured

## Updating Your Deployment

When you make changes to your code:

1. Push the changes to your repository
2. Vercel will automatically redeploy your project

If you need to update environment variables:

1. Go to your project settings in Vercel
2. Update the environment variables
3. Redeploy the project