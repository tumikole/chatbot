import * as actions from "../ActionTypes/index";

 const getMessage = (state = [], action) => {
  switch (action.type) {
    case actions.GET_INTRO_MESSAGE:
      return { ...state.user, introMessage: action.payload };

        default:
      return state;
  }
};

export default getMessage


