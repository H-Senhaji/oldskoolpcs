const reducer = (state = ["hello"], action = {}) => {
  switch (action.type) {
    case "ADD_MODEL":
      return [...state, { ...action.payload }];
    default:
      return state;
  }
};

export default reducer;
