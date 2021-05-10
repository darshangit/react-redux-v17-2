import { FIREBASE_URL } from "../FirebaseConst";
import { cartActions } from "./cart";
import { toggleActions } from "./toggle";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(FIREBASE_URL + "cart.json");
      if (!response.ok) {
        throw new Error("Colud not fetch cart data");
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      toggleActions.showNotification({
        status: "error",
        title: "Error!",
        message: "Error Someting went wrong!!!",
      });
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      toggleActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending Cart Data!!!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(FIREBASE_URL + "cart.json", {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error("Sending Cart Data failed");
      }
    };
    try {
      await sendRequest();
    } catch (error) {
      dispatch(
        toggleActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Oops something went wrong!!!",
        })
      );
    }

    dispatch(
      toggleActions.showNotification({
        status: "success",
        title: "Success!",
        message: "Sending Success!!!",
      })
    );
  };
};
