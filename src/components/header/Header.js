import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: "#673ab7", // Deep purple color
    height: 60, // Increased height
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: "8px", // Reduced margin between the title and the subtitle
  },
  title: {
    fontFamily: "'Roboto', sans-serif", // Standard font family
    fontSize: "2.5rem", // Larger font size
    fontWeight: "bold", // Bold font weight
    color: "#ffd600", // Gold color
    textDecoration: "none", // Remove underline
  },
  subtitle: {
    fontFamily: "'Roboto', sans-serif", // Standard font family
    fontSize: "1.2rem", // Increased font size
    color: "#e0e0e0", // Light gray color
    textAlign: "center",
    background: "#673ab7", // Match navbar background color
    padding: "8px 0", // Add padding for better readability
  },
  homeButton: {
    marginRight: theme.spacing(2), // Add margin to separate from the title
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>

          <div className={classes.titleContainer}>
            <Typography variant="h1" className={classes.title}>
              PharmaNest
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Typography variant="subtitle1" className={classes.subtitle}>
        Bridging Healthcare with Innovation
      </Typography>
    </div>
  );
}

export default Header;
