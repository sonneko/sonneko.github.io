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
import About from "./pages/about";
import Index from "./pages";

import SF2024Game from "./pages/game/sf2024/App";

// from my layout components
import Layout from "./Layout";
import NotFound from "./global/NotFound";

import GlobalContext from "./global/globalContext";
import GlobalContextClass from "./class/global";




// react router dom routing
function App() {
  return (
    <BrowserRouter>
      <GlobalContext.Provider value={new GlobalContextClass()}>
        <Routes>
          {/* home pages */}
          <Route path="/" element={<Layout title="Home"><Home /></Layout>} />

          {/* root directry pages */}
          <Route path="/intro" element={<Layout title="Introduce"><Intro /></Layout>} />
          <Route path="/links" element={<Layout title="Links"><Links /></Layout>} />
          <Route path="/develop" element={<Layout title="Develop"><Develop /></Layout>} />
          <Route path="/about" element={<Layout title="About"><About /></Layout>} />
          <Route path="/index" element={<Layout title="index"><Index /></Layout>} />

          {/* blog pages */}
          <Route path="/blogs" element={<Layout title="blog"><Blog /></Layout>} />
          <Route path="/blog/:id" element={<EachBlog />} />

          {/* game pages */}
          <Route path="/games" element={<Layout title="games"><Game /></Layout>} />
          <Route path="/games/sf2024" element={<SF2024Game />} />

          {/* 404 page */}
          <Route path="*" element={<Layout title="404 not found"><NotFound /></Layout>} />
        </Routes>
        </GlobalContext.Provider>
    </BrowserRouter>
  )
}

export default App;