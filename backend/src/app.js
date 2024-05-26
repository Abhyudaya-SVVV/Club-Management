import  Express  from "express";
import cookieParser from "cookie-parser";
const app = Express();
import cors from 'cors'

app.use(cors({
    origin: '*',
    credentials: true
}))

app.use(Express.json({ limit: "16kb"}))
app.use(Express.urlencoded({extended: true, limit : "16kb"}))
app.use(cookieParser())


import userRoutes from "./route/user.route.js"
import taskRoutes from "./route/task.route.js"
app.use("/api/v1/users",userRoutes)
app.use("/api/v1/user/cards",taskRoutes)

export default app;