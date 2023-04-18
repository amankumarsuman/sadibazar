import styles from "../form.module.css";
import Authentication from "../Authentication";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    mobile: "",
    role: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    const { email, password } = data;

    if (!email) return setError("Enter an email address");

    if (!password) return setError("Enter a password");

    if (!validateEmail(email)) return setError("Enter a valid email address");

    if (password.length < 6)
      return setError("Your password must be at least 6 characters long.");

    const onSuccess = () => {
      navigate("/");
    };

    const onError = (e) => {
      setError(e.message);
    };

    // dispatch(
    //   signupData(
    //     email,
    //     password,
    //     mobile,
    //     role,
    //     first_name,
    //     last_name,
    //     onSuccess,
    //     onError
    //   )
    // );
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const form = (
    <div className={styles["wrapper"]}>
      <div className={styles["header"]}>
        <div className={styles["title"]}>Sign up with your email</div>
        <div className={styles["login"]}>
          Already have an account? <Link to={"/login"}>Login</Link>
        </div>
      </div>
      <div className={styles["form"]}>
        <input placeholder={"First Name"} />
        <input placeholder={"Last Name"} />
        <input placeholder={"Email"} />
        <input placeholder={"Password"} type={"password"} />
        <input placeholder={"Mobile"} />
        <input placeholder={"Role"} />
        <button onClick={handleSignup} className={"btn1"}>
          Sign Up
        </button>
      </div>
    </div>
  );

  return <Authentication data={form} />;
};

export default Signup;
