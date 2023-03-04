import { useHomePageContext } from "../contexts/homePageContext";
import { useState } from "react";

const Joke = () => {
  const { joke, fetchJokes } = useHomePageContext();
  const [btnDown, setBtnDown] = useState(false);

  return (
    <section className="joke-container">
      <h1>tell a joke</h1>
      <p>{joke}</p>
      <div
        className="btn"
        onClick={fetchJokes}
        onMouseDown={() => setBtnDown(true)}
        onMouseUp={() => setBtnDown(false)}
        style={{
          boxShadow: btnDown && "inset 3px 3px 3px var(--clr-grey-500)",
        }}
      >
        one more
      </div>
    </section>
  );
};
export default Joke;
