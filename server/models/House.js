import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const HousesSchema = new Schema(
    {
        style: { type: String, required: true, minlength: 2, maxlength: 100 },
        bdrm: { type: Number, required: true, min: 1, max: 100 },
        bath: { type: Number, required: true, min: 1, max: 100 },
        price: { type: Number, required: true, min: 0, max: 999999999 },
        img: { type: String, maxlength: 600, default: 'https://media.istockphoto.com/id/533997887/photo/coming-soon.webp?s=612x612&w=is&k=20&c=_NJsxvLmD0ZzqbbdQZOz82CNCvIVsuUHDtIqXEsg8mA=' },
        description: { type: String, maxlength: 1000 },
    },
    { timestamps: true, toJSON: { virtuals: true } }
)