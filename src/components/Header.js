import React, {useState} from 'react';


function Header({ views, createdAt, title, upvotes, downvotes}) {
    const [upVotes, setupVotes] = useState(upvotes)
    const [downVotes, setdownVotes] = useState(downvotes)

    function handleUpVoteClick() {
        setupVotes(upVotes + 1)
    }

    function handleDownVoteClick() {
        setdownVotes(downVotes + 1)
    }

return (
    <div className="videodata">
        <h1>{title}</h1>
        <p>{views} views || Uploaded {createdAt}</p>
        <button className="upvote-btn" onClick={handleUpVoteClick} >{upVotes} 👍</button><button className="downvote-btn" onClick={handleDownVoteClick}>{downVotes} 👎 </button>
        <br></br>
        
    </div>
)


}


export default Header;