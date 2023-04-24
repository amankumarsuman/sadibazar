import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function ComboOfferCard({
  product,
  specialPrice,
  addProductToCart,
}) {
  const [addToCart, setAddToCart] = React.useState(false);
  const handleAddToCart = () => {
    setAddToCart(true);

    setTimeout(() => {
      setAddToCart(false);
      addProductToCart(product);
    }, 600);
  };

  return (
    <>
      <ImageList sx={{ height: 450 }}>
        <ImageListItem key="Subheader" cols={2}>
          {/* <ListSubheader component="div">December</ListSubheader> */}
        </ImageListItem>
        {product?.map((item) => (
          <ImageListItem key={item._id}>
            <img
              src={`${item.image}?w=248&fit=crop&auto=format`}
              srcSet={`${item.imimageg}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.name}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.name}
              subtitle={`INR ${item.price}`}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Button
        sx={{ fontWeight: "bold", padding: "1em", marginTop: "1em" }}
        variant="outlined"
      >
        Special Price {specialPrice ? specialPrice : "Contact Us"}
      </Button>
      <Button
        onClick={handleAddToCart}
        variant="contained"
        sx={{ fontWeight: "bold", padding: "1em", marginTop: "1em" }}
      >
        Contact on 8360105386
      </Button>
    </>
  );
}
