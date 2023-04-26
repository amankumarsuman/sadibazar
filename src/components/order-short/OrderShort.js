import { Grid } from "@mui/material";
import styles from "./orderShort.module.css";
import { useNavigate } from "react-router-dom";

const OrderShort = ({ order, orderPage = "" }) => {
  const navigate = useNavigate();

  if (!order) return;

  const formatStatus = () => {
    const st = order.status;
    return st.charAt(0).toUpperCase() + st.slice(1).toLowerCase();
  };

  return (
    // <div

    // >
    <Grid
      onClick={() => navigate(orderPage + `${order.order_id}`)}
      //   className={styles["wrapper"]}
      sx={{ width: "100%" }}
      container
      spacing={2}
    >
      <Grid item xs={12} sm={12} md={3} xl={3}>
        <div className={styles["id"]}>{order.order_id}</div>
      </Grid>
      <Grid item xs={12} sm={12} md={3} xl={3}>
        <div className={styles["name"]}>
          {order?.name?.first} {order?.name?.last}
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={2} xl={2}>
        <div className={styles["items"]}>{order.products?.length}</div>
      </Grid>
      <Grid item xs={12} sm={12} md={2} xl={2}>
        <div className={styles["total"]}>{order.total?.toFixed(2)}</div>
      </Grid>
      <Grid item xs={12} sm={12} md={2} xl={2}>
        <div
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/admin/orders/update?id=${order?.order_id}`);
          }}
          className={`${styles["status"]} ${styles[order?.status]}`}
        >
          {formatStatus()}
        </div>
      </Grid>
    </Grid>
    // </div>
  );
};

export default OrderShort;
