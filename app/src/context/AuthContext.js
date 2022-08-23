import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "62e89e82d17a834ee202fc91",
    username: "222",
    email: "222@gmail.com",
    password: "$2b$10$ZtNFUWBfHPbwBt8rcnDytucDqVCjgeGhTDzoP5Ki8g4AAw6cTWIH.",
    profilePicture: "profile/profile1.jpg",
    coverPicture: "post/post1.jpg",
    followers: ["62e8a50c62c4f1f9d7a044fc"],
    followings: ["62e8be3700b2ef3ce456326e"],
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
