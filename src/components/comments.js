import React, {useState} from "react"


function Comments({comments}) {

 const [hide, setHide] = useState(true)
        
      

return (
    
    <div className="Comments">
        <button className="hide-comments" onClick={() => setHide(!hide)}>{hide ? "Hide Comments" : "Show Comments"}</button>
        <h1>2 Comments</h1>
        {comments.map((comment) => (
            <div className="user">
           {hide && <h2>{comment.user}</h2>}
           {hide && <p>{comment.comment}</p>}
            </div>
        ))}
    </div>
)



}

export default Comments;