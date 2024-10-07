// from react
import { BrowserRouter, Routes, Route } from "react-router-dom";

// from my page components
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Links from "./pages/Links";
import Game from "./pages/game/index";
import Blog from "./pages/blog/index";
import EachBlog from "./pages/blog/dynamic";

// from my layout components
import Layout from "./Layout";

// react router dom routing
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          {/* home pages */}
          <Route path="/" element={<Home />} />

          {/* root directry pages */}
          <Route path="/intro" element={<Intro />} />
          <Route path="/links" element={<Links />} />

          {/* blog pages */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<EachBlog />} />

          {/* game pages */}
          <Route path="/game" element={<Game />} />

          {/* 404 page */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;