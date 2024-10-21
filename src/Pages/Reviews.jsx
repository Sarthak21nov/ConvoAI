/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Player } from "@lottiefiles/react-lottie-player"
import Navbar from "../components/Navbar"
import DiscussionGif from "../assets/DisscussionGif.json"
import CommentCard from "../components/CommentCard"
import CommentCard2 from "../components/CommentCard2"
import CommentCard3 from "../components/CommentCard3"
import manImg1 from "../assets/male1.jpeg"
import manImg2 from "../assets/male2.jpeg"
import manImg3 from "../assets/male3.jpeg"
import manImg4 from "../assets/male4.jpeg"
import girlImg2 from "../assets/girl2.jpeg"
import girlImg3 from "../assets/girl3.jpeg"
import girlImg4 from "../assets/girl4.jpeg"
import girlImg5 from "../assets/girl1.jpeg"
import { useState, useEffect, useRef } from "react"
import send from "../assets/send.png"
import ReviewMsg from "../components/ReviewMsg"
import axios from "axios"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"

function Reviews() {

  const [input, setInput] = useState("")
  const [Message, setMessage] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    fetchReview()
  }, [])

  useEffect(()=>{
    console.log(Message)
  }, [Message])

  const text1 = "ConvoAI is such a game-changer! It’s super convenient having all the best AI chatbots in one spot. The interface is really easy to use, and it’s perfect for getting quick, smart responses!"

  const text2 = "ConvoAI is a fantastic platform! Having access to multiple AI chatbots in one place saves me so much time. The responses are quick and relevant, making my life easier!"

  const text3 = "I love using ConvoAI! The range of AI chatbots available is impressive, and the user-friendly interface makes it simple to find what I need. It's a must-try for anyone!"

  const text4 = "ConvoAI has transformed how I interact with AI! The convenience of accessing various chatbots without jumping between apps is amazing. Highly recommend for quick assistance!"

  const text5 = "I can’t say enough good things about ConvoAI! It’s so handy to have all these AI chatbots in one location. The interface is clean and intuitive, making it a pleasure to use."

  const text6 = "ConvoAI is simply brilliant! I appreciate the simplicity of finding and using different AI chatbots. The smart responses save me time and effort every day!"

  const text7 = "ConvoAI is a game-changer for productivity! It consolidates all the top chatbots, allowing me to get answers faster. The sleek design enhances the overall experience!"

  const text8 = "I’m really impressed with ConvoAI! It’s so convenient to have all the top AI chatbots in one location. The quick and accurate responses make it an invaluable tool for my daily tasks!"


  const Name = localStorage.getItem('userName')
  const d = new Date()
  const date = d.getDate()
  const MonthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const Month = MonthArray[d.getMonth()]
  const Year = d.getFullYear()

  const userLoggedIn = ()=>{
    const cookie = Cookies.get('authToken')
    console.log(cookie)
    if(cookie){
      return true
    } else{
      alert("You need to be logged in before posting any review")
      navigate("/login")
      return false
    }
  }

  // Modify the review section if user is not logged in it. He or she should not log in first then only review can be posted.

  const handleSubmit = async (e)=>{
    e.preventDefault()
    if(!userLoggedIn()){
      return
    }
    try{
      const postReview = await axios.post('http://localhost:5000/api/review/putReview', {
        User_Review: input,
        Date: date,
        Month: Month,
        Year: Year,
        Name: Name
      }) 
      setInput("")
      console.log(`Message: ${postReview.data.message}`)
      fetchReview()
    } catch(err){
      alert("Error occurred while posting")
      console.log(err)
    }
  } 

  const fetchReview = async ()=>{
    try{
      const getReviews = await axios.get('http://localhost:5000/api/review/getAllReviews')
      setMessage(getReviews.data.data)
    } catch(err){
      console.log("Unable to fetch all the reviews")
    }
  }



  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className="text-center p-5 font-semibold text-3xl bg-red-100">
        <p>Welcome to Communication Forum</p>
      </div>
      <div className="grid grid-cols-2 p-5 bg-red-100">
        <p className="font-serif">Welcome to our Discussion Forum, a dedicated space for users to engage, share ideas, and provide valuable feedback about their experience on our platform. Whether you're here to offer suggestions, leave a review, or seek assistance from our development team, this forum serves as an open channel for collaboration and connection. <br/>

        <b>Suggestions & Ideas:</b>
        We believe that the best ideas come from our community, and your input is vital in helping us improve our services. If you have any suggestions for new features, design improvements, or functionality changes, feel free to post them here. Our team actively reviews all suggestions and considers them for future updates, ensuring that your voice is heard. <br/>

        <b>Reviews & Feedback:</b>
        Your honest reviews help us understand what we're doing right and where we can improve. Whether it's praise for a smooth experience or constructive criticism about a challenge you've faced, your feedback is invaluable. By sharing your experiences, you help us enhance our offerings for everyone in the community. <br/>

        <b>Get in Touch with Developers:</b>
        We understand that sometimes you might encounter technical issues or need clarification on how certain features work. Our team of developers is here to assist you! In this forum, you can post your queries, and one of our developers will respond to provide the support you need. We aim to foster open communication between our users and our team, ensuring a seamless user experience. <br/>
        <br/>
        Join the conversation and be a part of shaping the future of our platform. We are excited to hear your thoughts, address your concerns, and work together to make this space even better for everyone!</p>
        <Player
         src={DiscussionGif}
         loop
         autoplay
         className="w-[400px] pt-5"/>
      </div>
      <p className="text-center font-medium text-4xl p-6">Some Voices</p>
        <hr/>
      <div className="marquee w-full">
        <CommentCard image = {manImg2} name="Chris Evans" text={text1}/>
        <CommentCard2 image = {manImg4} name="Late. Ratan Tata" text={text2}/>
        <CommentCard3 image = {girlImg2} name="Shraddha Kapoor" text={text3}/>
        <CommentCard2 image = {manImg1} name="Robert Downey Jr." text={text4}/>
        <CommentCard image = {girlImg4} name="Pooja Hedge" text={text5} />
        <CommentCard image = {manImg3} name="Siddharth Malhotra" text={text6} />
        <CommentCard2 image = {girlImg3} name="Alexandra Daddario" text={text7} />
        <CommentCard2 image = {girlImg5} name="Ciara Hanna" text={text8}/>
      </div>
      <hr/>

      {/* Review Section */}
      <p className="text-center font-medium text-4xl m-4 pt-6">Reviews</p>
      <div className="m-4 p-7 border-2 border-solid border-black min-h-[600px] rounded-3xl bg-black">
        <div className="min-h-[500px] max-h-[500px]  overflow-y-auto rounded-2xl">
         {Message.map((msg,index)=>{
          return <ReviewMsg name={msg.Name} date={msg.Date} month={msg.Month} year={msg.Year} key={index}     review = {msg.ReviewMessage} />
         })}
        </div>
        <div className="h-[10%] flex">
          <form onSubmit={handleSubmit}>
            <input type="textarea" placeholder="Enter your review" value={input} onChange= {(e)=>setInput(e.target.value)} className="m-5 p-4 w-[300px] sm:w-[1100px] rounded-full"/>
          </form>
          <img src={send} className=" h-[50px] mt-6 hover:cursor-pointer rounded-full" onClick={handleSubmit}/>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="bg-red-100 min-h-[200px] m-4 ">
          <p className="text-3xl text-center font-bold pt-[90px]">GET IN TOUCH</p>
        </div>
        <div className="text-center pt-[60px] bg-slate-200 min-h-[200px] m-4">
          <ul>
            <li className="text-blue-600 hover:scale-110"><a href ="https://mail.google.com/mail/u/0/#inbox/FMfcgzQXJbBJMjLjtMdztPqTDdBXrsWV?compose=GTvVlcRwPkPHHNsDFdvSlgPfbPglscjZLrKHDbXHvVQbznNGKlXstkWHhTTQpjDgFjZjnDGxdmcXw">sarthak.nov21@gmail.com</a></li>
            <li className="text-blue-600 hover:scale-110">sarthak_y.s</li>
            <li className="text-blue-600 hover:scale-110">Sarthak_21</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Reviews
