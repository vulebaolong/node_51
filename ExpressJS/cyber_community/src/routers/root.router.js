import express from "express"
import demoRouter from "./demo.router"

const rootRouter = express.Router()

rootRouter.use("/demo", demoRouter)

export default rootRouter
