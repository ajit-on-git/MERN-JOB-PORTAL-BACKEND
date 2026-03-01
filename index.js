import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicantionRoute from "./routes/application.route.js";

dotenv.config({});
const app = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")))

const allowedOrigins = [
  "http://localhost:5173",
  "https://mern-job-portal-frontend-5fmi.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true
}));




const PORT = process.env.PORT || 3000;

// api's
app.use("/api/v1/user", userRoute)
app.use("/api/v1/company", companyRoute)
app.use("/api/v1/job", jobRoute)
app.use("/api/v1/application", applicantionRoute)


app.listen (PORT , ()=> {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);  
})


// netstat -ano | findstr :8000
// taskkill /PID <PID> /F


// cd .\backend\
// npm run dev