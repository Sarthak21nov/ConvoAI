import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    ReviewMessage: {
        type: "String",
        required: true
    },
    Date : {
        type: "Number",
        required: true
    },
    Month: {
        type: "String",
        required: true
    },
    Year: {
        type: "Number",
        required: true
    },
    Name: {
        type: "String",
        required: true
    }
})
const Review = mongoose.model('Review', ReviewSchema)
export default Review