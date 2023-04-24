import { Grid, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import logo from "../../shared/sbazarlogo.png";
import styles from "./footer.modules.css";
import { Avatar, Divider, ListItemAvatar } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailIcon from "@mui/icons-material/Mail";
// import GoogleApiWrapper from "./GoogleMap";
import BusinessIcon from "@mui/icons-material/Business";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Link, useNavigate } from "react-router-dom";
import PublicIcon from "@mui/icons-material/Public";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
const CustomizedListText = styled(ListItemText)`
  color: white;
  cursor:pointer;
// font-weight:bold;
  // :hover {
  //   color: rgb(173, 181, 189);
  // }
   & .MuiListItemText-secondary {
                color: rgb(173, 181, 189);
                
              },
`;
const CustomizedListTextSecondary = styled(ListItemText)`
  color: white;
// font-weight:bold;
  // :hover {
  //   color: #2e8b57;
  // }
   & .MuiListItemText-secondary {
                color: white;
              },
`;

function FooterNew() {
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const myStyle = {
    color: "grey",
    fontFamily: "poppins",
    fontSize: "1",
    cursor: "pointer",
    transition: "transform 0.3s ease, background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "green",
      transform: "scale(1.1)",
      color: "black",
      borderRadius: "20px",
      //   padding: "1em",
      textAlign: "center",
    },
  };
  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };
  const handleHover = () => {
    buttonStyle.backgroundColor = "red";
  };

  const handleMouseLeave = () => {
    buttonStyle.backgroundColor = "#007bff";
  };

  function makePhoneCall(phoneNumber) {
    // You will need to replace `phoneNumber` with the actual phone number you want to call
    const url = `tel:${phoneNumber}`;
    window.location.href = url;
  }
  return (
    <>
      <Grid
        sx={{
          backgroundColor: "#0B0A0C",
          marginTop: "14em",
          paddingTop: "5em",
          paddingLeft: "5em",
          paddingBottom: "2em",
        }}
        container
        spacing={3}
      >
        {/* <div style={{ width: "90%", margin: "auto", marginTop: "5em" }}> */}
        <Grid item xs={12} md={4}>
          <img
            src={logo}
            alt="logo"
            // width="5em"
            style={{
              marginBottom: "1em",
              // border: "1px solid red",
              width: "15em",
              height: "9em",
            }}
          />
          <Typography sx={myStyle}>
            Welcome to Sadibazar, your one-stop-shop for all your wedding needs!
            We understand that planning a wedding can be stressful,
            <br />
            time-consuming, and expensive. That's why we're here to make the
            process as seamless and affordable as possible. At Sadibazar, we
            believe that every couple deserves to have their dream wedding, no
            matter their budget. That's why we work with some of the best
            vendors in the industry to provide you with high-quality services at
            competitive prices. Our team of wedding experts is here to guide you
            every step of the way, ensuring that your wedding day is everything
            you've ever wanted.
            <br />
            So why wait? Start planning your perfect wedding today with{" "}
            <span
              style={{ color: "green", fontWeight: "bold", fontSize: "20px" }}
            >
              Sadibazar.
            </span>
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography
            sx={{
              color: "white",
              marginBottom: "0.4em",
              fontFamily: "poppins",
            }}
            variant="h5"
            className={styles.textGradient}
          >
            Services
          </Typography>
          {/* <Link to="/audit" style={{ cursor: "pointer" }}> */}
          <Typography sx={myStyle}>Camera</Typography>
          {/* </Link> */}
          {/* <Link to="/expe-vetting" style={{ cursor: "pointer" }}> */}
          <Typography sx={myStyle}>Cars & Rath</Typography>
          {/* </Link> */}

          {/* <Link to="/expe-diligence"> */}
          <Typography sx={myStyle}>Lehanga & Sherwani</Typography>
          {/* </Link> */}
          {/* <Link to="/design"> */}
          <Typography sx={myStyle}>Invitation Card</Typography>
          {/* </Link> */}
          {/* <Link to="/expe-creator"> */}
          <Typography sx={myStyle}>DJ & Trolly</Typography>
          {/* </Link> */}
          {/* <Link to="/expe-creator"> */}
          <Typography sx={myStyle}>Pandal & Stage</Typography>
          {/* </Link> */}
          {/* <Link to="/skinCare"> */}
          <Typography sx={myStyle}>Marriage Hall</Typography>
          {/* </Link> */}

          <Typography
            style={{ cursor: "pointer" }}
            // onClick={() => handleNavigate("https://metanmore.expelee.com/")}
            sx={myStyle}
          >
            Catering
          </Typography>
          {/* <Link to="nft"> */}
          <Typography sx={myStyle}>Many More to come....</Typography>
          {/* </Link> */}
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography
            sx={{
              color: "white",
              marginBottom: "0.4em",
              fontFamily: "poppins",
            }}
            variant="h5"
            className={styles.textGradient}
          >
            Mission
          </Typography>

          {/* <Link to="/coinLevel"> */}
          <Typography sx={myStyle}>
            At Sadibazar, our mission is to make weddings more affordable,
            convenient, and stress-free for every couple. We believe that
            everyone deserves to have their dream wedding without sacrificing
            quality or breaking the bank. By providing a one-stop-shop for all
            wedding needs and flexible payment options including no-cost EMI, we
            aim to empower couples to plan their perfect day with ease and joy.
          </Typography>
          {/* </Link> */}

          <Typography
            sx={{
              color: "white",
              marginTop: "1em",
              marginBottom: "0.4em",
              fontFamily: "poppins",
            }}
            className={styles.textGradient}
            variant="h5"
          >
            Company
          </Typography>
          {/* <Link to="/team"> */}
          <Typography sx={myStyle}>Team</Typography>
          {/* </Link> */}
        </Grid>

        <Grid item xs={12} md={2}>
          <div
            style={{
              // backgroundColor: "#090e49",
              color: "white",
              // padding: "2em",
              height: "100vu",
            }}
            className={styles.secondaryText}
          >
            <Typography
              sx={{ fontFamily: "poppins" }}
              className={styles.textGradient}
              variant="h5"
            >
              Connect With Us
            </Typography>
            <ListItem>
              <ListItemAvatar>
                <span style={{ cursor: "pointer" }}>
                  <Avatar
                    onClick={() =>
                      (window.location = "mailto:business@expelee.com")
                    }
                    // href="mailto:business@expelee.com"
                    sx={{
                      border: "1.5px dotted white",
                      backgroundColor: "#3d75ed",
                    }}
                  >
                    <MailIcon />
                  </Avatar>
                </span>
              </ListItemAvatar>
              <CustomizedListText
                onClick={() =>
                  (window.location = "mailto:business@sadibazar.tech")
                }
                primary="EMAIL(For Vendor)"
                secondary="mailto:business@sadibazar.tech"
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    border: "1.5px dotted white",
                    backgroundColor: "#3d75ed",
                  }}
                >
                  <NotificationsNoneIcon />
                </Avatar>
              </ListItemAvatar>
              <CustomizedListText
                onClick={() => (window.location = "mailto:info@sadibazar.tech")}
                primary="EMAIL(For Customer)"
                secondary="mailto:info@sadibazar.tech"
              />
            </ListItem>

            <ListItem>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    border: "1.5px dotted white",
                    backgroundColor: "#3d75ed",
                  }}
                >
                  <PublicIcon />
                </Avatar>
              </ListItemAvatar>

              <CustomizedListText
                primary="SOCIAL MEDIA"
                secondary={
                  <>
                    <div style={{ marginTop: "5%", display: "flex" }}>
                      <span
                        className={styles.linkDecoration}
                        style={{ marginRight: "7px" }}
                        // onClick={() =>
                        //   handleNavigate("https://twitter.com/expeleeofficial")
                        // }
                      >
                        {/* <CircleDiv icon={<TwitterIcon />} name="twitter" /> */}
                        <Avatar
                          sx={{
                            border: "1.5px dotted white",
                            backgroundColor: "#3d75ed",
                          }}
                        >
                          <TwitterIcon />
                        </Avatar>
                      </span>
                      <span
                        style={{ marginRight: "7px" }}
                        className={styles.linkDecoration}
                        // onClick={() =>
                        //   handleNavigate(
                        //     "https://www.instagram.com/expeleeofficial/"
                        //   )
                        // }
                      >
                        <Avatar
                          sx={{
                            border: "1.5px dotted white",
                            backgroundColor: "#3d75ed",
                          }}
                        >
                          <InstagramIcon />
                        </Avatar>
                      </span>
                      <span
                        style={{ marginRight: "5px" }}
                        className={styles.linkDecoration}
                        // onClick={() =>
                        //   handleNavigate(
                        //     "https://www.linkedin.com/company/expelee/"
                        //   )
                        // }
                        name="linkedin"
                      >
                        {/* <CircleDiv icon={<LinkedInIcon />} /> */}
                        <Avatar
                          sx={{
                            border: "1.5px dotted white",
                            backgroundColor: "#3d75ed",
                          }}
                        >
                          <LinkedInIcon />
                        </Avatar>
                      </span>
                    </div>

                    {/* <div style={{ marginTop: "3%", display: "flex" }}></div> */}
                  </>
                }
              />
            </ListItem>
            <Typography
              sx={{ fontFamily: "poppins" }}
              className={styles.textGradient}
              variant="h5"
            >
              Address
            </Typography>
            <ListItem>
              <ListItemAvatar>
                <span style={{ cursor: "pointer" }}>
                  <Avatar
                    onClick={() =>
                      (window.location = "mailto:business@expelee.com")
                    }
                    // href="mailto:business@expelee.com"
                    sx={{
                      border: "1.5px dotted white",
                      backgroundColor: "#3d75ed",
                    }}
                  >
                    <BusinessIcon />
                  </Avatar>
                </span>
              </ListItemAvatar>
              <CustomizedListText
                onClick={() =>
                  (window.location = "mailto:business@naturalganic.shop")
                }
                primary="Narsar, Baheri, Darbhanga,Bihar,   847105"
                secondary="Near Ramghat Chowk"
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <span style={{ cursor: "pointer" }}>
                  <Avatar
                    onClick={() => makePhoneCall(+918360105386)}
                    // href="mailto:business@expelee.com"
                    sx={{
                      border: "1.5px dotted white",
                      backgroundColor: "#3d75ed",
                    }}
                  >
                    <SupportAgentIcon />
                  </Avatar>
                </span>
              </ListItemAvatar>
              <CustomizedListText
                onClick={() => makePhoneCall(+918360105386)}
                primary="+918360105386"
                // secondary="Near Ramghat Chowk"
              />
            </ListItem>
            {/* <GoogleApiWrapper /> */}
          </div>
        </Grid>
      </Grid>
      <Divider sx={{ backgroundColor: "grey" }} />
      <div
        style={{
          backgroundColor: "#0B0A0C",
          color: "white",
          padding: "2%",
          paddingTop: "2em",
        }}
      >
        <Grid container sx={{ width: "95%", margin: "auto" }}>
          <Grid item xs={10} md={6}>
            <div>
              <span
                style={{
                  color: "#adb5bd",
                  marginRight: "0.5em",
                  fontFamily: "poppins",
                  fontSize: "1",
                }}
              >
                Copyright 2023
              </span>
              <a
                style={{ fontFamily: "poppins", fontSize: "1.3em" }}
                className={styles.linkDecoration}
                href="https://sadibazar.tech/"
              >
                Sadibazar PVT.LTD
              </a>
              <span
                style={{
                  color: "#adb5bd",
                  marginLeft: "0.5em",
                  fontFamily: "poppins",
                  fontSize: "1",
                }}
              >
                {" "}
                All Rights Reserved
              </span>
            </div>
          </Grid>
          <Grid
            item
            xs={2}
            md={6}
            sx={{ textAlign: "end", fontFamily: "poppins", fontSize: "1" }}
          >
            <div>Support</div>
          </Grid>
        </Grid>
      </div>
    </>
    // </Grid>
  );
}

export default FooterNew;
