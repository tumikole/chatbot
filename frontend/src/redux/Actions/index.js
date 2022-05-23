// import axios from 'axios'
import axios from "axios";
import * as actions from "../Actiontypes";

export const getData = () => {
  return async (dispatch) => {
    let data = await axios.get("http://localhost:3002/get_messages");
    try {
      dispatch({
        type: actions.GET_API_DATA,
        payload: data.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getIntroMessage = (welcomeMessage) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: actions.GET_INTRO_MESSAGES,
        payload: welcomeMessage,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getOptionsMessage = (data) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: actions.GET_OPTIONS_MESSAGES,
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getSubOptions = (cantLogInOptions) => {
  return async (dispatch) => {
    try {
      await dispatch({ type: actions.GET_OPTIONS, payload: cantLogInOptions });
    } catch (e) {
      console.log(e);
    }
  };
};

export const updateSubOption = (option) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: actions.UPDATE_SUB_OPTION,
        payload: option,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const updateSolution = (option) => {
  console.log('option', option)
  return async (dispatch) => {
    try {
      await dispatch({
        type: actions.UPDATE_SOLUTION,
        payload: option
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const clearState = () => {
  return async (dispatch) => {
    try {
      await dispatch({ type: actions.CLEAR_STATE, payload: [] });
    } catch (e) {
      console.log(e);
    }
  };
};

// export const saveInformationButtons = (data) => {
//   console.log("data", data);
//   return async (dispatch) => {
//     try {
//       await dispatch({ type: actions.SAVE_BUTTONS, payload: data });
//     } catch (e) {
//       console.log(e);
//     }
//   };
// };
