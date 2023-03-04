import NewsHub from "../components/NewsHub";
import TechGallery from "../components/TechGallery";
import DivsionLine from "../components/DivsionLine";
import Joke from "../components/Joke";

const HomePage = () => {
  return (
    <div className="page-container">
      <TechGallery />
      <DivsionLine />
      <Joke />
      <DivsionLine />
      <NewsHub />
    </div>
  );
};
export default HomePage;
