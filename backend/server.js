import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";

// Import routes
import bookingRoutes from "./routes/bookings.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Debug environment variables
console.log("🔧 Environment Debug:");
console.log("FRONTEND_URL:", process.env.REACT_APP_FRONTEND_URL);
console.log("NODE_ENV:", process.env.NODE_ENV);

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});

// Middleware
app.use(helmet());
app.use(limiter);

// Allow all origins in development, specific origins in production
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? [
        process.env.REACT_APP_FRONTEND_URL,
        process.env.VERCEL_FRONTEND_URL,
        "https://richyscut-and-designs-jdw9-602nok9dk-ogubuike245s-projects.vercel.app",
        "https://richyscut-and-designs-jdw9.vercel.app",
      ].filter(Boolean)
    : ["*"]; // Allow all origins in development

app.use(
  cors({
    origin: function (origin, callback) {
      console.log("🌐 CORS Check:");
      console.log("Incoming Origin:", origin);
      console.log("Allowed Origins:", allowedOrigins);
      console.log("NODE_ENV:", process.env.NODE_ENV);

      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) {
        console.log("✅ No origin - allowing request");
        return callback(null, true);
      }

      // In development mode, allow all origins
      if (
        process.env.NODE_ENV !== "production" ||
        allowedOrigins.includes("*")
      ) {
        console.log("✅ Development mode or wildcard - allowing all origins");
        return callback(null, true);
      }

      // In production, check against the allowed origins list
      if (
        allowedOrigins.some(
          (allowedOrigin) =>
            origin.includes(allowedOrigin) || allowedOrigin.includes(origin)
        )
      ) {
        console.log("✅ Origin allowed:", origin);
        callback(null, true);
      } else {
        console.log("❌ Origin blocked:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// Allow preflight for all routes
app.options("*", cors());

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
};

connectDB();

// Routes
app.use("/api/bookings", bookingRoutes);

// Root route for Vercel deployment
app.get("/", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Richy's Cut and Designs API Root",
    timestamp: new Date().toISOString(),
  });
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Richy's Cut and Designs API is running",
    timestamp: new Date().toISOString(),
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
    error:
      process.env.NODE_ENV === "development"
        ? err.message
        : "Internal server error",
  });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV || "development"}`);
});

export default app;
