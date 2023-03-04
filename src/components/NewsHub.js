import { newsOutlets } from "../data";
import styled from "styled-components";

const NewsHub = () => {
  return (
    <NewsWrapper>
      <h1 className="news-title">news hub</h1>
      <section className="newsContainer">
        {newsOutlets.map((item) => {
          const { id, icon, url, text } = item;
          return (
            <div key={id}>
              <a href={url} target="_blank">
                <img src={icon} alt={text} />
              </a>
            </div>
          );
        })}
      </section>
    </NewsWrapper>
  );
};
export default NewsHub;

const NewsWrapper = styled.div`
  .newsContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, 150px);
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .newsContainer img {
    height: 3rem;
    width: 8rem;
  }

  .newsContainer img:hover {
    transform: scale(1.5);
    transition: var(--transition-news);
  }

  .news-title {
    color: var(--clr-primary);
  }
`;
