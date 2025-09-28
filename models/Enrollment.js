import mongoose from "mongoose"

const EnrollmentSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, lowercase: true, trim: true },
        phone: { type: String, required: true, trim: true },
        message: { type: String, required: true, maxlength: 800 },
    },
    { timestamps: true },
)

export const Enrollment = mongoose.model("Enrollment", EnrollmentSchema)
