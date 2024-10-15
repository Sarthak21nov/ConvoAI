import express from 'express'
import { getAllReviews, putReview } from '../Controllers/ReviewController.js'

const app = express()

app.get('/getAllReviews', getAllReviews)
app.post('/putReview', putReview)

export default app