// from react
import { BrowserRouter, Routes, Route } from "react-router-dom";

// from my page components
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Links from "./pages/Links";
import Game from "./pages/game/index";
import Blog from "./pages/blog/index";
import EachBlog from "./pages/blog/dynamic";
import Develop from "./pages/Develop";

// from my layout components
import Layout from "./Layout";
import NotFound from "./global/NotFound";

// react router dom routing
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* home pages */}
        <Route path="/" element={<Layout title="Home"><Home /></Layout>} />

        {/* root directry pages */}
        <Route path="/intro" element={<Layout title="Introduce"><Intro /></Layout>} />
        <Route path="/links" element={<Layout title="Links"><Links /></Layout>} />
        <Route path="/develop" element={<Layout title="Develop"><Develop /></Layout>} />"

        {/* blog pages */}
        <Route path="/blogs" element={<Layout title="blog"><Blog /></Layout>} />
        <Route path="/blog/:id" element={<EachBlog />} />

        {/* game pages */}
        <Route path="/games" element={<Layout title="games"><Game /></Layout>} />

        {/* 404 page */}
        <Route path="*" element={<Layout title="404 not found"><NotFound /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;