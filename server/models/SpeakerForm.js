import mongoose from "mongoose"

const SpeakerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        company: {
            type: String,
            required: true,
        },
        designation: {
            type: String,
            required: true
        },
        experience:{
            type: String,
            required: true
        },
        description:{
            type:String,
            required: true
        }
    }, 
    {timestamps: true}
)

export default mongoose.model("Speaker", SpeakerSchema)