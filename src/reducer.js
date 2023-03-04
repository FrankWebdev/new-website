import { act } from "react-dom/test-utils";
import { techImages } from "./data";

const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_SLIDES":
      return { ...state, show_slides: true };

    case "HIDE_SLIDES":
      return { ...state, show_slides: false, active_NO: 0 };

    case "SET_ACTIVE_NO":
      return { ...state, active_NO: action.payload };

    case "NEXT_SLIDE":
      let nextNO = state.active_NO + 1;
      if (nextNO > techImages.length) {
        nextNO = 1;
      }
      return { ...state, active_NO: nextNO };

    case "PREV_SLIDE":
      let prevNO = state.active_NO - 1;
      if (prevNO < 1) {
        prevNO = techImages.length;
      }
      return { ...state, active_NO: prevNO };

    case "SET_JOKE":
      return { ...state, joke: action.load };
  }
};
export default reducer;
