import mongoose from "mongoose"

const FormSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        about: {
            type: String,
            required: true
        },
        imageUrl:{
            type: String
        },
        speakers: [{
            type: mongoose.Schema.Types.Object,
            ref: "speakerRoute",
        }]
    }, 
    {timestamps: true}
)

export default mongoose.model("Event_card", FormSchema)