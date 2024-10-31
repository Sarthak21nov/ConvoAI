import Review from "../Models/ReviewModel.js"


/* eslint-disable no-unused-vars */
export const getAllReviews = async (req,res)=>{
    try{
        const reviews = await Review.find({})
        res.json({status: true, message: "Successfully found all the reviews", data: reviews})
    } catch(err){
        res.json({status: false, message: "Unable to get the reviews"})
    }
}

export const putReview = async (req,res)=>{

    // Add Name Parameter here to get the name when showing on frontend
    try{
        const {User_Review, Date, Month, Year, Name} = req.body
        if(!User_Review || !Date || !Month || !Year || !Name) {
           return res.json({status: false, message: "Didn't received all the required Parameters"})
        }
        await Review.create({
            ReviewMessage: User_Review,
            Date,
            Month,
            Year,
            Name
        })
        return res.json({status: true, message: "Successfully posted the review"})
    } catch(err){
        return res.json({status: false, message: "Unable to put the Review"})
    }
    

}

export const DeleteReview = async (req, res)=>{
    try{
        const {userName, ReviewText} = req.body;
        if(!userName || !ReviewText){
            return res.json({status: false, message: "Unable to delete"})
        }
        await Review.findOneAndDelete({userName, ReviewText})
        return res.json({status: true, message: "Review Deleted Successfully"})
    } catch (err){
        return res.json({status: false, message: "An error occurred while deleting Review"})
    }
}