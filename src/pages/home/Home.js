import styles from "./home.module.css";
import { Link } from "react-router-dom";
import DeliveryImg from "../../shared/assets/delivery.png";
import Categories from "../../components/categories/Categories";
import ProductCard from "../../components/product-card/ProductCard";
import DeliveryIcon from "../../shared/assets/why/delivery.png";
import Marriage from "../../shared/assets/why/marriage.png";
import ReliableIcon from "../../shared/assets/why/reliable.png";
import PricesIcon from "../../shared/assets/why/prices.png";
import fassailogo from "../../shared/assets/FSSAI_logo.png";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loading from "../../components/loading/Loading";
import { getRecommendations } from "../../actions/products";
import DownloadIcon from "@mui/icons-material/Download";
import certificate from "../../shared/assets/fasai.pdf";
import { Button } from "@mui/material";
import Timer from "./Timer";
import axios from "axios";
import ComboOfferCard from "../../components/product-card/CombiCard";
const Home = ({ addProductToCart }) => {
  const products = useSelector((state) => state.products.recommendations);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [comboOffer, setComboOffer] = useState();
  useEffect(() => {
    axios
      .get("https://sadibazarapi.vercel.app/combo/")
      .then((res) => setComboOffer(res?.data?.comboProducts));
  }, []);
  useEffect(() => {
    const onSuccess = () => {
      setLoading(false);
    };

    dispatch(getRecommendations(onSuccess));
  }, [dispatch]);

  if (loading) return <Loading />;
  function viewPDFInNewTab() {
    // Open a new window
    const newWindow = window.open();

    // Set the content of the new window to be a PDF file
    newWindow.document.write(
      `<iframe src="${certificate}" style="width:100%;height:100%;"></iframe>`
    );
  }

  console.log(comboOffer, "comboOffer");
  //timer for offer
  const endDate = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000); // end in 5 days
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["hero"]}>
        <div className={styles["hero-text"]}>
          <h1>
            All Your Marriage Item{" "}
            <span style={{ color: "yellow" }}>At One Place</span>
          </h1>
          <p>Making one stop sollution !</p>
          <Link className={"btn1"} to={"products"}>
            Order Now
          </Link>
        </div>
        <div className={styles["delivery"]}>
          <motion.img
            drag
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            src={Marriage}
            alt={"Delivery"}
          />
        </div>
      </div>
      <section>
        <div className={"heading-wrapper"}>
          <h1 className={"heading"}>Categories</h1>
        </div>
        <Categories />
      </section>
      <section>
        <div className={"heading-wrapper"}>
          <h1 className={"heading"}>
            Combo Offer{" "}
            <Button variant="outlined">
              Offer Ends In <Timer endDate={endDate} />{" "}
            </Button>
          </h1>
        </div>
        <div className={styles["categories-wrapper"]}>
          {comboOffer.map((item, i) => (
            <div key={i}>
              <div className={"heading2"}>
                <Link to={`/products?category=${item.category}`}>
                  {item.category}
                </Link>
              </div>

              {/* {item.products.map((product, j) => ( */}
              <ComboOfferCard
                addProductToCart={addProductToCart}
                product={item?.products}
                specialPrice={item?.specialPrice}
                key={item?._id}
              />
              {/* ))} */}
            </div>
          ))}
          <Link to={"/products"} className={`btn1 ${styles["see-all"]}`}>
            See All
          </Link>
        </div>
      </section>
      <section>
        <div className={"heading-wrapper"}>
          <h1 className={"heading"}>Recommended Products</h1>
        </div>
        <div className={styles["categories-wrapper"]}>
          {products.map((item, i) => (
            <div key={i} className={styles["category-wrapper"]}>
              <div className={"heading2"}>
                <Link to={`/products?category=${item.category}`}>
                  {item.category}
                </Link>
              </div>
              <div className={styles["products-wrapper"]}>
                {item.products.map((product, j) => (
                  <ProductCard
                    addProductToCart={addProductToCart}
                    product={product}
                    key={`${i}${j}`}
                  />
                ))}
              </div>
            </div>
          ))}
          <Link to={"/products"} className={`btn1 ${styles["see-all"]}`}>
            See All
          </Link>
        </div>
      </section>
      <div className={styles["why"]}>
        <div className={styles["why-component"]}>
          <img src={DeliveryIcon} alt={"Delivery"} />
          <div className={"why-text"}>
            <div className={styles["why-title"]}>Under 30 minutes</div>
            <div className={styles["why-desc"]}>
              Delivered on time - Every time!
            </div>
          </div>
        </div>
        <div className={styles["why-component"]}>
          <img src={ReliableIcon} alt={"Reliable"} />
          <div className={"why-text"}>
            <div className={styles["why-title"]}>Reliable</div>
            <div className={styles["why-desc"]}>
              Get what you order - Every time!
            </div>
          </div>
        </div>
        <div className={styles["why-component"]}>
          <img src={PricesIcon} alt={"Prices"} />
          <div className={"why-text"}>
            <div className={styles["why-title"]}>Amazing prices</div>
            <div className={styles["why-desc"]}>
              Offers offers offers - Every time!
            </div>
          </div>
        </div>
        <div className={styles["why-component"]}>
          <img src={fassailogo} alt={"Reliable"} />
          <div className={"why-text"}>
            <div className={styles["why-title"]}>
              Naturalganic Dairy Products
            </div>
            <div className={styles["why-desc"]}>
              Are certified with FSSAI
              <span onClick={viewPDFInNewTab}>
                <DownloadIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
