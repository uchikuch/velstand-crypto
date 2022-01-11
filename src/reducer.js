export const initialState = {
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGOUT_USER":
      window.localStorage.removeItem("topset_jwt");
      return {
        user: null,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
