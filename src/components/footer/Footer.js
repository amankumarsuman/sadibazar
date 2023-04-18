import styles from "./footer.module.css";
import Logo from "../../shared/assets/logo2.png";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["top-wrapper"]}>
        <div className={styles["logo-wrapper"]}>
          <img src={Logo} alt={"Rabbit Mart"} />
        </div>
        <Typography>
          Welcome to our NaturalGanic, where we offer high-quality organic and
          inorganic products that are safe, healthy, and eco-friendly. From
          personal care to household essentials, we curate only the best natural
          and responsibly manufactured options. We're committed to fair trade
          and ethical sourcing, and we're dedicated to making sustainable living
          easy and convenient for you. Shop with us today and experience the
          difference that high-quality organic and inorganic products can make
          in your life.
        </Typography>
        <div className={styles["pages-wrapper"]}>
          <div className={styles["pages"]}>
            <div className={styles["page-title"]}>Shopping</div>
            <div className={styles["pages-list"]}>
              <Link to={"/orders"}>Track Order</Link>
              <Link to={"/shipping"}>Track Shipping</Link>
              <Link to={"/cart"}>Shopping Cart</Link>
            </div>
          </div>
          <div className={styles["pages"]}>
            <div className={styles["page-title"]}>Products</div>
            <div className={styles["pages-list"]}>
              <Link to={"/products?category=Fruits%20and%20Vegetables"}>
                Fruits & Vegetables
              </Link>
              <Link to={"/products?category=Beverages"}>Beverages</Link>
              <Link to={"/products"}>All Products</Link>
            </div>
          </div>
          {/* <div className={styles["pages"]}>
            <div className={styles["page-title"]}>Development</div>
            <div className={styles["pages-list"]}>
              <a
                href={"https://github.com/skittlesaur/rabbitmart"}
                target={"_blank"}
                rel={"noreferrer"}
              >
                GitHub Repository
              </a>
            </div>
          </div> */}
        </div>
      </div>
      <div className={styles["credits"]}>
        {" "}
        Copyright © 2023
        <span
          style={{
            marginLeft: "1em",
            marginRight: "1em",
            color: "green",
            fontWeight: "bold",
          }}
        >
          <Link to="https://naturalganic.shop/">Naturalganic</Link>
        </span>
        All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
