import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import PhotosPage from "./pages/PhotosPage";
import ForumPage from "./pages/ForumPage";
import AboutPage from "./pages/AboutPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="forum" element={<ForumPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="photos" element={<PhotosPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
