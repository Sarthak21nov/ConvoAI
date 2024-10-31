import express from 'express'
import { DeleteReview, getAllReviews, putReview } from '../Controllers/ReviewController.js'

const app = express()

app.get('/getAllReviews', getAllReviews)
app.post('/putReview', putReview)
app.delete('/deleteReview', DeleteReview)

export default app