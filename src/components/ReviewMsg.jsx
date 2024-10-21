/* eslint-disable react/prop-types */



function ReviewMsg(props) {
  return (
    <div>
        <div className="min-h-[50px] p-4 bg-white m-4 rounded-2xl">
            <div className="flex">
                <p><b>{props.name}: Posted on {props.date} {props.month} {props.year}</b></p>
            </div>
            <p>{props.review}</p>
        </div>
    </div>
  )
}

export default ReviewMsg
