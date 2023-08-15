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

    case "ADD_TO_WISHLIST": {
      const isAlreadyInWishlist = state.wishlist.find(
        (item) => item.id === action.payload.id
      );
      if (isAlreadyInWishlist) {
        return state;
      }
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    }

    case "REMOVE_FROM_WISHLIST": {
      const filteredData = state.wishlist.filter(
        (el) => el.id !== action.payload.id
      );
      return { ...state, wishlist: filteredData };
    }

    default:
      return state;
  }
};
