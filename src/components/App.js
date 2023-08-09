import video from "../data/video.js";
import Header from "/home/gcamoin/react-hooks-state-events-pairing/src/components/Header.js"
import Comments from "/home/gcamoin/react-hooks-state-events-pairing/src/components/comments.js"

function App() {
  console.log("Here's your data:", video);
  const {id, title, views, createdAt, upvotes, downvotes, comments} = video

  

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dpw9EHDh2bM"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />

      <Header  key={id} title={title} views={views} createdAt={createdAt} upvotes={upvotes} downvotes={downvotes}/>
      <Comments key={comments.id} comments={comments}/>
    </div>
  );
}

export default App;
