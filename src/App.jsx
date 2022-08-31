import React, { Component } from "react";
import { Header, About, Comments, Footer } from "./components";
import commentsData from "./data/commentsData";
import socialData from "./data/socialData";

function App() {
    const commentsElements = commentsData.map((comment, index) => {
        return <Comments key={comment.id} comment={comment} />;
    });
    return (
        <div className="App">
            <Header />
            <About />
            {commentsElements}
            <Footer social={socialData} />
        </div>
    );
}

export default App;
//   <Routes>
//       {/* <Route exact path="/" element={<Feed />} /> */}
//       <Route path="/video/:id" element={<VideoDetail />} />
//       <Route path="/channel/:id" element={<ChannelDetail />} />
//       <Route path="/search/:searchTerm" element={<SearchFeed />} />
//   </Routes>;
