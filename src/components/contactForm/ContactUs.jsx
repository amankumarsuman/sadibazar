import React from "react";
import axios from "axios";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import { Button, Grid, TextField, TextareaAutosize } from "@mui/material";
function ContactForm() {
  const init = {
    name: "",
    email: "",
    message: "",
    mobile: "",
    city: "",
    address: "",
  };
  const [formData, setFormData] = useState(init);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(
        "https://sadibazarapi.vercel.app/notifications/contact-us",
        formData
      );
      alert("Email sent successfully!");
      setFormData(init);
    } catch (error) {
      console.error(error);
      alert("Failed to send email!");
    }
  };

  return (
    // <form onSubmit={handleSubmit}>
    <>
      <Paper
        sx={{
          textAlign: "center",
          marginTop: "1em",
          marginBottom: "1em",
          padding: "1em",
          fontWeight: "bold",
          fontSize: "1.4rem",
        }}
        elevation={10}
      >
        Partner With Us
      </Paper>
      <Grid sx={{ width: "95%", margin: "auto" }} container spacing={2}>
        <Grid item xs={12} sm={12} md={4} xl={4}>
          <TextField
            variant="outlined"
            fullWidth
            name="name"
            label="Name"
            onChange={handleChange}
            value={formData?.name}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} xl={4}>
          <TextField
            // variant="outlined"
            fullWidth
            name="city"
            label="City"
            onChange={handleChange}
            value={formData?.city}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} xl={4}>
          <TextField
            // variant="outlined"
            fullWidth
            name="address"
            label="Address"
            onChange={handleChange}
            value={formData?.address}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} xl={4}>
          <TextField
            // variant="outlined"
            fullWidth
            name="mobile"
            label="Mobile"
            onChange={handleChange}
            value={formData?.mobile}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} xl={4}>
          <TextField
            // variant="contained"
            fullWidth
            name="email"
            label="Email"
            onChange={handleChange}
            value={formData?.email}
          />
        </Grid>
        <Grid item xs={12} md={4} lg={4} sm={12}></Grid>
        <Grid item xs={12} sm={12} md={4} xl={4}>
          <TextareaAutosize
            minRows={3}
            name="message"
            label="Message"
            onChange={handleChange}
            value={formData?.message}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={12} sm={12}></Grid>
        <Button onClick={handleSubmit} variant="contained">
          Submit
        </Button>
      </Grid>
      {/* <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </label> */}
    </>
    // </form>
  );
}

export default ContactForm;
