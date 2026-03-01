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
const corsOptions = {
    origin: 'https://mern-job-portal-frontend-5fmi.vercel.app',  // Adjust to your frontend URL
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
}



app.use(cors(corsOptions));

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