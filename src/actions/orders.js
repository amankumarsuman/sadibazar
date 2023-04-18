import * as api from "../api/index";
import { ORDERS_FETCH, ORDERS_FETCH_ALL } from "../constants/actions/orders";

export const fetchOrder = (id, onSuccess, onError) => async (dispatch) => {
  try {
    const orderData = await api.fetchOrder(id).then((res) => res.data);
    dispatch({ type: ORDERS_FETCH, data: orderData });
    onSuccess(orderData);
  } catch (e) {
    onError(e.response.data);
  }
};

export const updateOrder = (id, status, onSuccess, onError) => async () => {
  try {
    await api.updateOrder(id, status);
    onSuccess();
  } catch (e) {
    onError(e.response.data);
  }
};

export const fetchOrders = (page, onSuccess, onError) => async (dispatch) => {
  try {
    const ordersData = await api.fetchOrders(page).then((res) => res.data);
    dispatch({ type: ORDERS_FETCH_ALL, data: ordersData });
    onSuccess();
  } catch (e) {
    onError(e);
  }
};

export const postOrder = (token, data, onSuccess, onError) => async () => {
  try {
    // const [
    //   name,
    //   email,
    //   phone,
    //   country,
    //   city,
    //   area,
    //   street,
    //   building_number,
    //   floor,
    //   apartment_number,
    // ] = data;
    console.log(token, data, "token");
    // const { url } = await api
    //   .processPayment(token, data)
    //   .then((res) => res.data);
    onSuccess("https://naturalganic.shop/orders");

    // const ordersData = await api.postOrder(token, data).then((res) => res.data);
    // dispatch({ type: POST_ORDER, data: ordersData });
    // onSuccess();
  } catch (e) {
    onError(e);
  }
};
