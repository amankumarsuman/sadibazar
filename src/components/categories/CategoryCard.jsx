import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import styles from "./categories.module.css";
export default function CategoryCard({ name, image }) {
  return (
    <Card className={styles.categoryCardStyle} sx={{ width: 180 }}>
      <CardMedia
        className={styles.categoryCardImage}
        sx={{ height: 150 }}
        image={image}
        title={`${image}pic`}
      />
      <Link to={`/products?category=${name}`}>
        <CardContent>
          <Typography
            sx={{ color: "green", fontWeight: "bold", textAlign: "center" }}
            gutterBottom
            variant="h6"
            component="div"
          >
            {name}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}
