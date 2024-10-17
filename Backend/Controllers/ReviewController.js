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
    try{
        const {User_Review, Date, Month, Year} = req.body
        if(!User_Review || !Date || !Month || !Year) {
           return res.json({status: false, message: "Didn't received all the required Parameters"})
        }
        await Review.create({
            ReviewMessage: User_Review,
            Date,
            Month,
            Year
        })
        return res.json({status: true, message: "Successfully posted the review"})
    } catch(err){
        return res.json({status: false, message: "Unable to put the Review"})
    }
    

}