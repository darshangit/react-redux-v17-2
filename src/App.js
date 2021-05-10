import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { FIREBASE_URL } from "./FirebaseConst";
import { toggleActions } from "./store/toggle";

function App() {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle.toggleCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.toggle.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        toggleActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending Cart Data!!!",
        })
      );
      const response = await fetch(FIREBASE_URL + "cart.json", {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error("Sending Cart Data failed");
      }

      dispatch(
        toggleActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sending Success!!!",
        })
      );
    };

    sendCartData().catch((error) => {
      dispatch(
        toggleActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Oops something went wrong!!!",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {toggle && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
