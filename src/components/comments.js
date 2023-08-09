import React from "react"


function Comments({comments}) {
return (
    
    <div className="Comments">
        {comments.map((comment) => (
            <div className="user">
            <p>{comment.user}</p>
            <p>{comment.comment}</p>
            </div>
        ))}
    </div>
)



}

export default Comments;