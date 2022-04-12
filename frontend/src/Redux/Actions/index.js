import axios from "axios";
import * as actions from "../ActionTypes/index";

export const getMessages = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3002/get_messages");
      console.log("res", response);
      dispatch({ type: actions.GET_INTRO_MESSAGE, payload: response.data.data});
    } catch (e) {
      console.log("getMessage error", e);
    }
  };
};