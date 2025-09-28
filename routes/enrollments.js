import { Router } from "express"
import { Enrollment } from "../models/Enrollment.js"

export const enrollmentsRouter = Router()

enrollmentsRouter.post("/", async (req, res) => {
    try {
        const { name, email, phone, message } = req.body
        if (!name || !email || !phone || !message) {
            return res.status(400).json({ error: "name, email, phone, message required" })
        }
        const created = await Enrollment.create({ name, email, phone, message })
        res.status(201).json(created)
    } catch (err) {
        res.status(500).json({ error: "Failed to create enrollment" })
    }
})

enrollmentsRouter.get("/", async (_req, res) => {
    try {
        const items = await Enrollment.find().sort({ createdAt: -1 }).lean()
        res.json(items)
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch enrollments" })
    }
})
