import React from "react";
import camera from "../../shared/assets/categories/camera.jpg";
import DJ from "../../shared/assets/categories/DJ.jpg";
import lehanga from "../../shared/assets/categories/lehanga.jpg";
import pandal from "../../shared/assets/categories/stage.jpg";
import hall from "../../shared/assets/categories/hall.jpeg";
import catering from "../../shared/assets/categories/categing.avif";
import car from "../../shared/assets/categories/car.png";
import sherwani from "../../shared/assets/categories/sherwani.jpg";
import All from "../../shared/assets/why/all.jpg";
import styles from "./categories.module.css";

import CategoryCard from "./CategoryCard";

const Categories = () => {
  const categories = [
    {
      display: "All",
      img: All,
    },
    {
      display: "Photography",
      img: camera,
    },
    {
      display: "DJ And Trolly",
      img: DJ,
    },
    {
      display: "Lehanga",
      img: lehanga,
    },
    {
      display: "Sherwani",
      img: sherwani,
    },
    {
      display: "Pandal And Stage",
      img: pandal,
    },
    {
      display: "Car & Rath",
      img: car,
    },
    {
      display: "Catering",
      img: catering,
    },
    {
      display: "Marriage Hall",
      img: hall,
    },
  ];

  return (
    <div className={styles["categories"]}>
      <div className={`${styles["categories-scroll"]}`}>
        {categories.map((item, i) => (
          //   <Paper elevation={10}>
          //     <Link
          //       key={i}
          //       to={`/products?category=${item.display}`}
          //       className={styles["category"]}
          //     >
          //       <div>{item.display}</div>
          //       <img src={item.img} alt={item.display} />
          //     </Link>
          //   </Paper>

          <CategoryCard name={item.display} image={item?.img} />
          //   <ImageListItem sx={{ width: 170 }} elevation={10} key={item.img}>
          //     <img
          //       src={`${item.img}?w=248&fit=crop&auto=format`}
          //       srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
          //       alt={item.display}
          //       loading="lazy"
          //     />
          //     <ImageListItemBar
          //       title={item.display}
          //       subtitle={item.display}
          //       actionIcon={
          //         <IconButton
          //           sx={{ color: "rgba(255, 255, 255, 0.54)" }}
          //           aria-label={`info about ${item.display}`}
          //         >
          //           <InfoIcon />
          //         </IconButton>
          //       }
          //     />
          //   </ImageListItem>
        ))}
      </div>
    </div>
  );
};

export default Categories;
