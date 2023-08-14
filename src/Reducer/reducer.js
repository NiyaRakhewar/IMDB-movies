export const initialState = {
  moviesData: [],
  wishlist: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "All_MOVIES":
      return { ...state, moviesData: action.payload };
    case "ADD_MOVIE":
      return { ...state, moviesData: [action.payload, ...state.moviesData] };

    case "ADD-WISHLIST-ITEM":
      return { ...state, wishlist: [action.payload, ...state.wishlist] };

    case "REMOVE-WISHLIST-ITEM":
      return { ...state.wishlist, wishlist: action.payload };

    default:
      return state;
  }
};
