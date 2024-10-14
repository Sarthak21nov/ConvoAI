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
import { useState } from "react"
import send from "../assets/send.png"
 
function Reviews() {

  const[input, setInput] = useState("")

  const text1 = "ConvoAI is such a game-changer! It’s super convenient having all the best AI chatbots in one spot. The interface is really easy to use, and it’s perfect for getting quick, smart responses!"

  const text2 = "ConvoAI is a fantastic platform! Having access to multiple AI chatbots in one place saves me so much time. The responses are quick and relevant, making my life easier!"

  const text3 = "I love using ConvoAI! The range of AI chatbots available is impressive, and the user-friendly interface makes it simple to find what I need. It's a must-try for anyone!"

  const text4 = "ConvoAI has transformed how I interact with AI! The convenience of accessing various chatbots without jumping between apps is amazing. Highly recommend for quick assistance!"

  const text5 = "I can’t say enough good things about ConvoAI! It’s so handy to have all these AI chatbots in one location. The interface is clean and intuitive, making it a pleasure to use."

  const text6 = "ConvoAI is simply brilliant! I appreciate the simplicity of finding and using different AI chatbots. The smart responses save me time and effort every day!"

  const text7 = "ConvoAI is a game-changer for productivity! It consolidates all the top chatbots, allowing me to get answers faster. The sleek design enhances the overall experience!"

  const text8 = "I’m really impressed with ConvoAI! It’s so convenient to have all the top AI chatbots in one location. The quick and accurate responses make it an invaluable tool for my daily tasks!"

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!input.trim !== ""){
      putReview()
    }
  }

  function putReview(){
    setInput("")
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
      <div className="m-4 p-7 border-2 border-solid border-black min-h-[600px] rounded-3xl bg-red-100">
        <div className="min-h-[500px] max-h-[500px] bg-slate-800 overflow-y-auto">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repellat possimus iste odio eveniet itaque placeat vel soluta deserunt nemo consectetur excepturi atque eius quos fugit mollitia quae quia quas deleniti, animi harum nulla! Aliquam libero quae expedita voluptas numquam, nostrum amet. Tempore, repudiandae? Nemo distinctio velit similique commodi voluptatem sapiente repellat odio eos voluptas numquam ullam, officia saepe unde tempore repellendus nostrum. Sint in blanditiis cupiditate doloremque, delectus, dolores eius aperiam corrupti recusandae impedit non iusto rerum illo ipsam illum assumenda reprehenderit earum iste nihil quos beatae laboriosam veritatis. Nihil quis consectetur omnis asperiores accusantium? Ab soluta doloribus magnam atque recusandae ipsam, odio et, debitis ipsum omnis neque animi saepe harum quod porro molestiae fugiat provident! Nemo porro, esse expedita facere error quia libero quae tempore odio. Natus accusantium aut aperiam quis tenetur neque recusandae enim quas, ut adipisci magnam? Aliquid exercitationem commodi sapiente, a numquam eum accusantium esse quos sunt quaerat molestiae. Est aspernatur voluptatibus inventore autem similique, fugit veniam adipisci temporibus natus? Iure ex sint atque architecto est culpa commodi ullam nemo ea placeat, eum amet recusandae laudantium officiis quasi dolor eligendi adipisci cumque! Perferendis minus tenetur sed libero porro expedita voluptatum asperiores earum quia labore. Consequatur rerum praesentium quo? Praesentium illo magni sunt exercitationem delectus accusantium veniam cupiditate explicabo maxime libero. Enim, aut sit. Qui optio, praesentium sequi est aliquam facere voluptatum ipsam culpa expedita numquam, veniam perferendis et commodi. Sequi quam unde quo et consequuntur odit, quis voluptates dignissimos reprehenderit minus eaque eligendi, hic libero! Nobis inventore aliquid nisi quos aspernatur vitae. Quisquam esse ut officiis neque molestiae nostrum a itaque minus dolorum harum, illum rerum repellendus fugiat pariatur cum nobis iure aliquam cupiditate, quos maxime provident, exercitationem possimus. Assumenda, explicabo soluta aut tempora, quisquam deleniti veniam, officiis error non quos dicta voluptatem sit! Non beatae vero facere dolorem laborum fugit dolores quisquam cupiditate! Vero, voluptas eum. Similique a delectus autem asperiores quod fugiat, reprehenderit earum beatae porro perspiciatis iusto vel omnis eveniet quas. Voluptates corrupti quis tempore necessitatibus, illo nihil impedit voluptatem earum perferendis error perspiciatis tenetur officiis quod maxime debitis similique! Illo rerum aperiam pariatur? Hic possimus aperiam reprehenderit, architecto voluptatum sed ducimus atque quo in nihil, fugit repudiandae natus reiciendis dolorum quaerat laudantium optio? Dicta aut, dolores quo aliquid repudiandae libero eveniet repellat ipsam eum quibusdam in temporibus vero, voluptatibus placeat eligendi dignissimos nam. Ex magni eligendi temporibus natus itaque facilis provident dolore sunt necessitatibus, debitis minima amet nam id praesentium. At minus sit excepturi est quia provident neque tempora recusandae quis. In ab saepe a vero, unde laboriosam sunt voluptatum voluptas sed modi distinctio temporibus sapiente tempora, omnis delectus assumenda officia dolores officiis adipisci quae quo dolor ratione! Aperiam ad error dolorem rerum sunt, suscipit itaque ex natus neque consectetur nisi, nihil sequi? Accusamus inventore porro aliquid voluptas iste laudantium distinctio animi voluptate cum, asperiores blanditiis modi facere ducimus aut corporis esse minus quas voluptates necessitatibus totam nemo sed! Blanditiis natus tempore, sequi doloribus nisi impedit ad alias facilis rem maiores ipsum ipsam! Quisquam nobis, odit fugiat dolorem explicabo at blanditiis adipisci molestias molestiae voluptates nemo, recusandae iusto mollitia consequatur ipsum facilis eos! Enim modi quae architecto dolores veritatis! Ad, maxime. Culpa sunt porro aperiam magnam eveniet aut praesentium consequuntur omnis dolorem, nobis officia eligendi tenetur excepturi, accusamus quis inventore dolores nostrum harum sit ut. Excepturi repudiandae, non quos vitae recusandae sequi rem eius quia nemo minima? Commodi, qui dolorum quidem enim quae dolorem sint velit ab ratione autem porro, asperiores eaque perspiciatis laborum. Dolor nisi dignissimos dolorum perferendis maxime laboriosam, officiis aperiam cum voluptates odit, distinctio vitae amet sit, quis beatae! Aperiam repellendus iste ipsam et, obcaecati nihil iure minima modi harum culpa cumque magni ipsum alias, accusantium autem nisi repellat error. Ea nesciunt ipsum voluptatem perspiciatis sint autem voluptate in? Voluptas quos, perspiciatis porro sed sit optio harum sint aperiam inventore eum ab debitis recusandae officiis dicta nesciunt iusto obcaecati repellendus ratione a vitae quis! Reiciendis inventore ab nam facere, mollitia vel similique harum illo, tempora, dolore suscipit placeat magnam cupiditate dolor minus odio saepe. Numquam architecto delectus aut vel itaque sed, inventore maiores quas, et accusantium iste? Maxime saepe repudiandae tempora accusamus quia nulla, tempore rem earum repellat odit laboriosam commodi quisquam quis perspiciatis? Aspernatur veniam itaque laboriosam illum debitis tenetur, assumenda qui eius neque fugiat earum sunt adipisci temporibus blanditiis nesciunt. Laudantium nobis dicta doloremque! Quam vero illo itaque nemo delectus accusamus reprehenderit fuga asperiores id maxime minus recusandae, exercitationem laudantium? Id velit quisquam nesciunt commodi neque cum labore quo minus dolorem blanditiis inventore odio fuga reprehenderit quas voluptate non, aliquam facilis, exercitationem illum? Aspernatur beatae ea repellendus voluptates mollitia et repudiandae labore ab ratione ad. Eum, fugiat animi perspiciatis commodi voluptatum nulla culpa enim eos, ex accusantium nisi id. Quas incidunt at quia nesciunt facere necessitatibus eum error velit. Adipisci odio sint a laboriosam ut commodi inventore voluptatum tempora recusandae dolores eius, sunt quo blanditiis labore temporibus odit dolorum modi! Dolore enim accusantium vero facere in aut excepturi modi placeat delectus, minima, ad aspernatur. Id ipsam nostrum eligendi possimus corporis. Omnis error id nesciunt magni accusantium unde tempore impedit est temporibus provident. A nobis dolore culpa doloribus esse iure ipsam! Porro asperiores enim, magni quidem molestias eius pariatur, obcaecati corporis voluptatum aspernatur repellendus amet quam? Et aliquid iure obcaecati nisi asperiores sint, accusamus necessitatibus cum illo quidem tempora quia iste quaerat rem! Tempora repellat, illo quaerat facilis officia dolorem veniam nulla, consectetur eveniet totam modi ipsa quam ducimus. Illum labore totam quod similique explicabo vitae reiciendis quo enim! Error a officiis maxime iure quis minus vero nulla? Soluta libero ut aspernatur porro sint nihil eius laboriosam voluptates nam doloribus voluptatibus obcaecati maiores ea recusandae quis quisquam, nemo reiciendis magni ipsam molestiae beatae aliquam aperiam? Et molestias natus voluptatibus voluptate deserunt porro vero expedita veniam in optio, fuga inventore vel harum sed cum eveniet quos, dolor error, consequatur eaque culpa officiis repellat ea totam! Exercitationem vitae inventore hic ullam asperiores non, nulla atque libero fugit ipsum fuga?
        </div>
        <div className="h-[10%] flex">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your review" value={input} onChange= {(e)=>setInput(e.target.value)} className="m-5 p-4 w-[300px] sm:w-[1100px] rounded-full"/>
          </form>
          <img src={send} className=" h-[50px] mt-6 hover:pointer rounded-full" onClick={putReview}/>
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
