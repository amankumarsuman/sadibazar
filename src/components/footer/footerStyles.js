// export const styles = {
//   root: {
//     backgroundColor: "#1F1F1F",
//     color: "#fff",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     padding: "3em 0",
//     fontFamily: "'Roboto', sans-serif",
//     borderTop: "1px solid #fff",
//   },
//   logo: {
//     fontSize: "2.5em",
//     fontWeight: "bold",
//     marginBottom: "1em",
//   },
//   linkContainer: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-around",
//     width: "80%",
//     marginBottom: "2em",
//     "@media (max-width: 768px)": {
//       flexDirection: "column",
//       alignItems: "center",
//     },
//   },
//   link: {
//     color: "#fff",
//     fontSize: "1.2em",
//     textDecoration: "none",
//     "&:hover": {
//       color: "#5FB4A2",
//       textDecoration: "underline",
//     },
//   },
//   socialContainer: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//     marginBottom: "1em",
//   },
//   socialIcon: {
//     fontSize: "1.5em",
//     margin: "0 0.5em",
//     color: "#fff",
//     "&:hover": {
//       color: "#5FB4A2",
//     },
//   },
//   copy: {
//     fontSize: "0.8em",
//     marginBottom: "1em",
//   },
// };

// export const styles = {
//   main: {
//     backgroundColor: "#1E1E1E",
//     color: "#fff",
//     padding: "4em 0",
//     borderTop: "1px solid #fff",
//     position: "relative",
//     overflow: "hidden",
//   },
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   logo: {
//     fontSize: "3em",
//     fontWeight: "bold",
//     marginBottom: "0.5em",
//     color: "#fff",
//     textAlign: "center",
//     textTransform: "uppercase",
//     letterSpacing: "3px",
//     animation: "$fadeIn 1s ease-in-out",
//   },
//   nav: {
//     display: "flex",
//     justifyContent: "center",
//     marginBottom: "2em",
//     "& a": {
//       color: "#fff",
//       textDecoration: "none",
//       margin: "0 1.5em",
//       fontSize: "1.2em",
//       fontWeight: 500,
//       transition: "color 0.3s ease-in-out",
//       "&:hover": {
//         color: "#ffcc00",
//       },
//     },
//   },
//   social: {
//     display: "flex",
//     justifyContent: "center",
//     marginBottom: "2em",
//     "& button": {
//       backgroundColor: "transparent",
//       border: "1px solid #fff",
//       borderRadius: "50%",
//       marginRight: "1em",
//       padding: "0.5em",
//       transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
//       "&:hover": {
//         backgroundColor: "#ffcc00",
//         color: "#232323",
//         transform: "rotate(360deg)",
//       },
//     },
//   },
//   contact: {
//     display: "flex",
//     justifyContent: "center",
//     "& p": {
//       margin: "0 1em",
//       fontSize: "1.2em",
//       fontWeight: 500,
//     },
//   },
//   rights: {
//     display: "flex",
//     justifyContent: "center",
//     borderTop: "1px solid #fff",
//     padding: "1em 0",
//     marginTop: "2em",
//     "& p": {
//       margin: 0,
//       fontSize: "0.8em",
//     },
//     animation: "$fadeInUp 1s ease-in-out",
//   },
//   "@keyframes fadeIn": {
//     "0%": {
//       opacity: 0,
//       transform: "translateY(-20px)",
//     },
//     "100%": {
//       opacity: 1,
//       transform: "translateY(0)",
//     },
//   },
//   "@keyframes fadeInUp": {
//     "0%": {
//       opacity: 0,
//       transform: "translateY(20px)",
//     },
//     "100%": {
//       opacity: 1,
//       transform: "translateY(0)",
//     },
//   },
// };
export const styles = {
  main: {
    // backgroundColor: "#232323",
    backgroundColor: "#F4D03F",
    backgroundImage: "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)",

    color: "#fff",
    padding: "4em 0",
    marginTop: "auto",
    borderTop: "1px solid #ccc",
    // backgroundImage: "url(../assets/footer.jpg)",

    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    fontSize: "2.5em",
    fontWeight: "bold",
    marginBottom: "0.5em",
    color: "#fff",

    // border: "1px solid red",

    margin: "auto",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1.5em",
    "& a": {
      color: "#fff",
      textDecoration: "none",
      margin: "0 1.5em",
      fontSize: "1.2em",
      fontWeight: 500,
      transition: "color 0.3s ease-in-out",
      "&:hover": {
        color: "#ccc",
      },
    },
  },
  social: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1.5em",
    "& button": {
      backgroundColor: "transparent",
      border: "1px solid #fff",
      borderRadius: "50%",
      marginRight: "1em",
      padding: "0.5em",
      transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
      "&:hover": {
        backgroundColor: "#fff",
        color: "#232323",
      },
    },
  },
  contact: {
    display: "flex",
    justifyContent: "center",
    "& p": {
      margin: "0 1em",
      fontSize: "1.2em",
      fontWeight: 500,
      color: "#fff",
    },
  },
  rights: {
    display: "flex",
    justifyContent: "center",
    borderTop: "1px solid #ccc",
    padding: "1em 0",
    marginTop: "1.5em",
    "& p": {
      margin: 0,
      fontSize: "0.8em",
      color: "#fff",
      opacity: 0.8,
    },
  },
  "@keyframes fadeIn": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
  "@keyframes slideUp": {
    from: {
      transform: "translateY(100px)",
      opacity: 0,
    },
    to: {
      transform: "translateY(0)",
      opacity: 1,
    },
  },
  fadeIn: {
    animation: "$fadeIn 0.5s ease-in-out",
  },
  slideUp: {
    animation: "$slideUp 0.5s ease-in-out",
  },
};
