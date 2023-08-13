export const initialState = {
  moviesData: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "All_MOVIES":
      return { ...state, moviesData: action.payload };

    default:
      return state;
  }
};
