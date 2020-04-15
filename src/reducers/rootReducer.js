const initState = {
  display: 'Loading ...',
};

const rootReducer = (state = initState, action) => {
  if (action.type === 'UPDATE_DISPLAY') {
    let display = action.msg;
    return {
      ...state,
      display: display,
    };
  }
  return state;
};

export default rootReducer;
