import mongoose from "mongoose"

const TestimonialSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        message: { type: String, required: true, maxlength: 600 },
        band: { type: Number, required: true, min: 0, max: 9 },
        avatarUrl: { type: String },
    },
    { timestamps: true },
)

export const Testimonial = mongoose.model("Testimonial", TestimonialSchema)
