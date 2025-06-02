import mongoose, { mongo } from "mongoose"

const ticketSchema = new mongoose.Schema({
    title : String,
    description : String,
    status : {
        type : String,
        default : "TODO"
    },
    createdBy:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    assignedTo:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"User",
        default : null
    },
    priority:String,
    deadline : Date,
    helpfulNotes : String,
    relatedSkills : [Skills],
    createdAt : {
        type : Date,
        default : Date.now
    }
})

export default mongoose.model("Ticket" , userSchema)