import React, { useContext } from "react";
import { useEffect, useState, useReducer } from "react";
import reducer from "../reducer";
import { techImages } from "../data";

const jokeURL = "https://icanhazdadjoke.com/";
const HomePageContext = React.createContext();

const initialState = {
  joke: null,
  techImages,
  show_slides: false,
  active_NO: 0,
};

export const HomePageContextProvider = ({ children }) => {
  // const [slidesShow, setSlidesShow] = useState(false);
  // const [activeNO, setActiveNO] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  const showSlides = () => {
    dispatch({ type: "SHOW_SLIDES" });
  };
  const hideSlides = () => {
    dispatch({ type: "HIDE_SLIDES" });
  };
  const setActiveNO = (id) => {
    dispatch({ type: "SET_ACTIVE_NO", payload: id });
  };
  const gotoNextSlide = () => {
    dispatch({ type: "NEXT_SLIDE" });
  };
  const gotoPrevSlide = () => {
    dispatch({ type: "PREV_SLIDE" });
  };

  const fetchJokes = async () => {
    const jokeHeaders = {
      Accept: "application/json",
      "User-Agent": "learning api",
    };
    try {
      const resp = await fetch(jokeURL, {
        headers: jokeHeaders,
      });
      const data = await resp.json();
      dispatch({ type: "SET_JOKE", load: data.joke });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  return (
    <HomePageContext.Provider
      value={{
        ...state,
        showSlides,
        hideSlides,
        setActiveNO,
        gotoNextSlide,
        gotoPrevSlide,
        fetchJokes,
      }}
    >
      {children}
    </HomePageContext.Provider>
  );
};

export const useHomePageContext = () => {
  return useContext(HomePageContext);
};
