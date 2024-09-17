// from react
import { BrowserRouter, Routes, Route } from "react-router-dom";

// from my page components
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Links from "./pages/Links";
import Game from "./pages/game/index";
import Blog from "./pages/blog/index";

// from my layout components
import Layout from "./Layout";

// react router dom routing
function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* home pages */}
      <Route path="/" element={<Layout><Home /></Layout>} />

      {/* root directry pages */}
      <Route path="/intro" element={<Layout><Intro /></Layout>} />
      <Route path="/links" element={<Layout><Links /></Layout>} />

      {/* blog pages */}
      <Route path="/blog" element={<Layout><Blog /></Layout>} />

      {/* game pages */}
      <Route path="/game" element={<Layout><Game /></Layout>} />

      {/* 404 page */}
      <Route path="*" element={<Layout><Home /></Layout>} />
      
    </Routes>
  </BrowserRouter>
  )
}

export default App;