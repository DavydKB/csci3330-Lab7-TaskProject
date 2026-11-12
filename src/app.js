import express from "express";
import router from "./routes/routes.js"

const app = express();


app.use(express.json());
app.use("/api/tasks",router);


const errorHandler = (err, req, res, next) => {
    console.error(err);
    const status = err.status || 500;
    res.status(status).json({
        success: false,
        message: err.message || "Internal Server Error."
    });
};

app.use(errorHandler);

export default app;
