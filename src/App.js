
import { Routes, Route } from "react-router-dom";

//Containers
import AppContainer from "./containers/AppContainer"
import PostsContainer from "./containers/PostsContainer"

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element= {<h3>Welcome</h3>}></Route>
      <Route path="app" element= {<AppContainer />}>
        <Route path="posts" element= {<PostsContainer />}/>
      </Route>
    </Routes>
  );
}

export default App;
