import express from "express"
import rootRouter from "./src/routers/root.router"

const app = express()

// Giúp body nhận được dữ liệu
app.use(express.json())

app.use("/api", rootRouter)

const port = 3069
app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
})