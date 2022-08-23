const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        user: null,
        isFetching: true,
        error: false,
      };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };

    case "LOGIN_FAIL":
      return {
        user: null,
        isFetching: true,
        error: action.payload,
      };

    case "FOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          followings: [...state.user.followings, action.payload],
        },
        error: action.payload,
      };

    case "UNFOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          followings: state.user.followings.filter(
            (following) => following !== action.payload
          ),
        },
        error: action.payload,
      };

    default:
      return state;
  }
};

export default AuthReducer;
