import { useHomePageContext } from "../contexts/homePageContext";
import { SlClose, SlArrowLeft, SlArrowRight } from "react-icons/sl";
import styled from "styled-components";

const TechGallery = () => {
  const {
    show_slides,
    showSlides,
    hideSlides,
    active_NO,
    setActiveNO,
    techImages,
    gotoNextSlide,
    gotoPrevSlide,
  } = useHomePageContext();
  return (
    <Wrapper>
      <section className="tech-zone-container">
        <aside className="tech-zone-desc">
          <h1>Tech zone</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam purus
            enim, gravida eget quam in, faucibus pharetra lorem. Cras ac ornare
            neque, id venenatis augue. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. In rhoncus posuere mattis. Aliquam et orci
            congue ante consequat sodales ut nec tellus. Maecenas sed eleifend
            quam.
          </p>
        </aside>

        <div
          className={
            show_slides ? "tech-gallery tech-gallery-hidden" : "tech-gallery"
          }
        >
          <SlClose
            className={
              show_slides
                ? "tech-slides-cross show-cross"
                : " tech-slides-cross"
            }
            onClick={() => {
              hideSlides();
            }}
          />
          <SlArrowLeft
            className={
              show_slides ? "tech-slides-prev show-prev" : "tech-slides-prev"
            }
            onClick={gotoPrevSlide}
          />
          <SlArrowRight
            className={
              show_slides ? "tech-slides-next show-next" : "tech-slides-next"
            }
            onClick={gotoNextSlide}
          />
          <div
            className={
              show_slides
                ? "tech-slides-holder show-slides"
                : "tech-slides-holder"
            }
          >
            {techImages.map((image) => {
              const { img, id } = image;
              return (
                <img
                  key={id}
                  className={
                    active_NO === id
                      ? "tech-slide-img active-slide"
                      : "tech-slide-img"
                  }
                  src={img}
                />
              );
            })}
          </div>
          {techImages.map((image) => {
            const { img, id } = image;
            return (
              <img
                src={img}
                className="tech-img"
                key={id}
                onClick={() => {
                  showSlides();
                  setActiveNO(id);
                }}
              />
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};
export default TechGallery;

const Wrapper = styled.div`
  .tech-zone-container {
    display: grid;
    grid-template-columns: 25% 1fr;
    gap: 3rem;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 700px) {
    .tech-zone-desc p {
      visibility: hidden;
    }
  }

  .tech-gallery {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
  }

  .tech-gallery-hidden {
    visibility: hidden;
  }

  .tech-img {
    width: 200px;
    border-radius: 2rem;
    border: 2px solid var(--clr-primary-light);
  }

  .tech-slides-holder {
    visibility: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .show-slides {
    visibility: visible;
  }

  .tech-slide-img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
    visibility: hidden;
  }

  .active-slide {
    visibility: visible;
  }

  .tech-slides-cross {
    visibility: hidden;
    color: var(--clr-lime-200);
    font-size: 3rem;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 11;
  }

  .tech-slides-cross:hover {
    color: var(--clr-lime-500);
  }

  .show-cross {
    visibility: visible;
  }

  .tech-slides-prev {
    visibility: hidden;
    color: var(--clr-lime-200);
    font-size: 3rem;
    position: absolute;
    left: 0rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 11;
  }
  .tech-slides-prev:hover {
    color: var(--clr-lime-500);
  }

  .show-prev {
    visibility: visible;
  }

  .tech-slides-next {
    visibility: hidden;
    color: var(--clr-lime-200);
    font-size: 3rem;
    position: absolute;
    right: 0rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 11;
  }

  .tech-slides-next:hover {
    color: var(--clr-lime-500);
  }

  .show-next {
    visibility: visible;
  }
`;
