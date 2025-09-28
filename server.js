import "dotenv/config"
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import { testimonialsRouter } from "./routes/testimonials.js"
import { Testimonial } from "./models/Testimonial.js"
import dotenv from 'dotenv'
import { ConnectToMongo } from "./config/config.js"
import { enrollmentsRouter } from "./routes/enrollments.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

ConnectToMongo()

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}))
app.use(express.json())

app.get("/", (_req, res) => {
    res.json({ ok: true, service: "IELTS Backend", endpoints: ["/api/testimonials"] })
})

app.use("/api/testimonials", testimonialsRouter)
app.use("/api/enrollments", enrollmentsRouter)

app.listen(PORT, () => {
    start();
    console.log(`Server running on http://localhost:${PORT}`)
})

async function start() {
    const count = await Testimonial.countDocuments()
    if (count === 0) {
        await Testimonial.create([
            {
                name: "Aarav Sharma",
                message: "The speaking practice boosted my fluency. Scored 7.5 overall!",
                band: 7.5,
                avatarUrl: "https://i.pravatar.cc/120?img=11",
            },
            {
                name: "Simran Kaur",
                message: "Mock tests with analytics helped me focus on weak areas.",
                band: 7.0,
                avatarUrl: "https://i.pravatar.cc/120?img=21",
            },
            {
                name: "Rahul Verma",
                message: "AI band predictions kept me on track throughout!",
                band: 8.0,
                avatarUrl: "https://i.pravatar.cc/120?img=31",
            },
        ])
        console.log("Seeded sample testimonials")
    }
}
