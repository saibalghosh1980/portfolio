const initialState = {
  loggedIn: false,
};

export default (state = initialState, action) => {
  let payload=action.payload;
  switch (action.type) {
    case "LOG_IN":
      //debugger;
      console.log("Action Passed::"+action.payload);      
      return { ...state, loggedIn: payload.loggedIn};
    case "LOG_OUT":
      return { ...state, loggedIn: payload.loggedIn };
    default:
      return state;
  }
};
