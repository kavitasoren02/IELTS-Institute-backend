import { Router } from "express"
import { Testimonial } from "../models/Testimonial.js"

export const testimonialsRouter = Router()

testimonialsRouter.get("/", async (_req, res) => {
    try {
        const items = await Testimonial.find().sort({ createdAt: -1 }).lean()
        res.json(items)
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch testimonials" })
    }
})

testimonialsRouter.post("/", async (req, res) => {
    try {
        const { name, message, band, avatarUrl } = req.body
        if (!name || !message || typeof band !== "number") {
            return res.status(400).json({ error: "name, message, band required" })
        }
        const created = await Testimonial.create({ name, message, band, avatarUrl })
        res.status(201).json(created)
    } catch (err) {
        res.status(500).json({ error: "Failed to create testimonial" })
    }
})
