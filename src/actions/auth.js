import * as api from "../api";
import {
  LOGIN,
  LOGOUT,
  REGISTER,
  UPDATE_WISHLIST,
} from "../constants/actions/authentication";

export const authLogin =
  (email, password, onSuccess, onError) => async (dispatch) => {
    try {
      const loginData = await api
        .authLogin(email, password)
        .then((res) => res.data);
      dispatch({ type: LOGIN, data: loginData });
      onSuccess();
    } catch (e) {
      onError(e.response ? e.response.data : { message: "Server Error" });
    }
  };
export const registerUser =
  (email, password, mobile, role, first_name, last_name, onSuccess, onError) =>
  async (dispatch) => {
    try {
      const signUpData = await api
        .registerUser(email, password, mobile, role, first_name, last_name)
        .then((res) => res.data);
      dispatch({ type: REGISTER, data: signUpData });
      onSuccess();
    } catch (e) {
      onError(e.response ? e.response.data : { message: "Server Error" });
    }
  };

export const logout = async (dispatch) => {
  dispatch({ type: LOGOUT });
};

export const verifyUser = (onSuccess, onError) => async () => {
  try {
    const verificationData = await api.verify().then((res) => res.data);
    onSuccess(verificationData);
  } catch (e) {
    onError(e);
  }
};

export const updateWishlist = (product_id, onError) => async (dispatch) => {
  try {
    const wishlistData = await api
      .userUpdateWishlist(product_id)
      .then((res) => res.data);
    dispatch({ type: UPDATE_WISHLIST, data: wishlistData.wishlist });
  } catch (e) {
    onError(e);
  }
};

export const getWishlist = (onSuccess, onError) => async () => {
  try {
    const wishlist = await api.getWishlist().then((res) => res.data);
    onSuccess(wishlist);
  } catch (e) {
    onError(e);
  }
};
