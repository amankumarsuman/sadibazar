import styles from "./checkout.module.css";
import "../.././shared/css/master.css";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../components/feedback/error/Error";
import { postOrder } from "../../actions/orders";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Grid, TextField } from "@mui/material";
// import awsExports from "./aws-exports";
// Amplify.configure(awsExports);
const Checkout = () => {
  const [error, setError] = useState("");
  const fname = useRef();
  const lname = useRef();
  const email = useRef();
  const phone = useRef();
  const city = useRef();
  const area = useRef();
  const street = useRef();
  const building_number = useRef();
  const floor = useRef();
  const apartment_number = useRef();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.products.cart_validation);

  const init = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    city: "",
    area: "",
    street: "",
    building_number: "",
    floor: "",
    apartment_number: "",
  };
  const [inputValue, setInputValue] = useState(init);
  const handleCheckout = async () => {
    // if (!fname.current.value) return setError("Enter a first name");
    // if (!lname.current.value) return setError("Enter a last name");
    // if (!email.current.value) return setError("Enter an email address");
    // if (!validateEmail(email.current.value))
    //   return setError("Enter a valid email address");
    // if (!phone.current.value) return setError("Enter a phone number");
    // if (!validatePhone(phone.current.value))
    //   return setError("Enter a valid phone number");
    // if (!city.current.value) return setError("Enter a city");
    // if (!area.current.value) return setError("Enter an area");
    // if (!street.current.value) return setError("Enter a street");
    // if (!building_number.current.value)
    //   return setError("Enter a building number");
    // if (isNaN(building_number.current.value))
    //   return setError("Enter a valid building number");
    // if (!floor.current.value) return setError("Enter a floor");
    // if (isNaN(floor.current.value))
    //   return setError("Enter a valid building number");
    // if (!apartment_number.current.value)
    //   return setError("Enter an apartment number");
    // if (isNaN(apartment_number.current.value))
    //   return setError("Enter a valid building number");

    const onSuccess = (url) => {
      window.location.href = url;
    };

    const onError = (e) => {
      setError(e.message);
    };

    // const data = {
    //   name: {
    //     first: fname.current.value,
    //     last: lname.current.value,
    //   },
    //   email: email.current.value,
    //   phone_number: phone.current.value,
    //   address: {
    //     country: "INR",
    //     city: city.current.value,
    //     area: area.current.value,
    //     street: street.current.value,
    //     building_number: building_number.current.value,
    //     floor: floor.current.value,
    //     apartment_number: apartment_number.current.value,
    //   },
    //   orderId: `${Date.now()}${uuidv4().split("-")[0]}`,
    // };

    const data = {
      name: {
        first: inputValue?.fname,
        last: inputValue?.lname,
      },
      email: inputValue?.email,
      phone_number: inputValue?.phone,
      address: {
        country: "INR",
        city: inputValue?.city,
        area: inputValue?.area,
        street: inputValue?.street,
        building_number: inputValue?.building_number,
        floor: inputValue?.floor,
        apartment_number: inputValue?.apartment_number,
      },
      orderId: `${Date.now()}${uuidv4().split("-")[0]}`,
    };
    dispatch(postOrder(cart, data, onSuccess, onError));

    // try {
    //   const response = await axios.post("http://localhost:5000/payments", {
    //     amount: cart.total,
    //     email: email.current.value,
    //     phone: phone.current.value,
    //     orderId: Date.now(),
    //   });

    //   // Redirect to Paytm payment gateway
    //   window.location.href = response.data.redirectUrl;
    // } catch (error) {
    //   setError(error.message);
    // }
    // dispatch(postOrder(cart.token, data, onSuccess, onError));
  };
  const validatePhone = (phone) => {
    return String(phone).toLowerCase();
    // .match(/^01[0-2,5]{1}[0-9]{8}$/);
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleChange = (e) => {
    // if (!fname.current.value) return setError("Enter a first name");
    // if (!lname.current.value) return setError("Enter a last name");
    // if (!email.current.value) return setError("Enter an email address");
    // if (!validateEmail(email.current.value))
    //   return setError("Enter a valid email address");
    // if (!phone.current.value) return setError("Enter a phone number");
    // if (!validatePhone(phone.current.value))
    //   return setError("Enter a valid phone number");
    // if (!city.current.value) return setError("Enter a city");
    // if (!area.current.value) return setError("Enter an area");
    // if (!street.current.value) return setError("Enter a street");
    // if (!building_number.current.value)
    //   return setError("Enter a building number");
    // if (isNaN(building_number.current.value))
    //   return setError("Enter a valid building number");
    // if (!floor.current.value) return setError("Enter a floor");
    // if (isNaN(floor.current.value))
    //   return setError("Enter a valid building number");
    // if (!apartment_number.current.value)
    //   return setError("Enter an apartment number");
    // if (isNaN(apartment_number.current.value))
    //   return setError("Enter a valid building number");
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <div className={styles["wrapper"]}>
      {error && <Error error={error} setError={setError} />}
      <div className={"heading-wrapper"}>
        <h1 className={"heading"}>Checkout</h1>
      </div>

      {/* <div className={styles["form"]}>
        <input ref={fname} type="text" placeholder="First Name" />
        <input ref={lname} type="text" placeholder="Last Name" />

        <input ref={email} type="text" placeholder="Email" />
        <input ref={phone} type="text" placeholder="Phone" />
        <input ref={city} type="text" placeholder="City" />

        <input ref={area} type="text" placeholder="Area" />
        <input ref={street} type="text" placeholder="Street" />
        <input
          ref={building_number}
          type="text"
          placeholder="Building Number"
        />

        <input ref={floor} type="text" placeholder="Floor" />
        <input
          ref={apartment_number}
          type="text"
          placeholder="Apartment Number"
        />
      </div> */}

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <TextField
            value={inputValue?.fname}
            name="fname"
            label="First Name"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <TextField
            value={inputValue?.lname}
            name="lname"
            label="Last Name"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <TextField
            value={inputValue?.email}
            name="email"
            label="Email"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <TextField
            value={inputValue?.phone}
            name="phone"
            label="Phone"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <TextField
            value={inputValue?.city}
            name="city"
            label="City"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <TextField
            value={inputValue?.area}
            name="area"
            label="Area"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <TextField
            value={inputValue?.street}
            name="street"
            label="Street"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <TextField
            value={inputValue?.building_number}
            name="building_number"
            label="Building Number"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <TextField
            value={inputValue?.apartment_number}
            name="apartment_number"
            label="Appartment Name"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
      </Grid>

      <div className={styles["total"]}>
        <div className={styles["total-text"]}>Total Price:</div>
        <div className={styles["total-amount"]}>{cart.total} INR</div>
      </div>

      <div className={styles["total-wrapper"]}>
        <button onClick={handleCheckout} className={"btn1"}>
          Checkout
        </button>
      </div>
    </div>
  );
};
export default Checkout;
