import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

import Owner from "../images/admin.jpg";
import Distributer from "../images/distributor.jpg";
import Supplier from "../images/Supplier.jpg";
import Manufacturer from "../images/manufactuer1.jpg";
import Transporter from "../images/transporter1.jpg";
import Wholesaler from "../images/Wholesaler.jpg";

import SignIn from "../login/SignIn";
import { BrowserRouter as Router } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    background: "#C8E6C9", // Soft green background color
    padding: "20px", // Add padding around the cards
    border: "2px solid #388E3C", // Medium thickness green border
  },
  root: {
    maxWidth: 350,
    marginBottom: 20, // Increase margin between cards
    transition: "transform 0.3s, border-color 0.3s", // Smooth transition for transform and border-color
    "&:hover": {
      transform: "translateY(-5px)", // Move the card up slightly on hover
      borderColor: "#4CAF50", // Change border color on hover
    },
  },
  media: {
    height: 280,
    paddingLeft: 20,
  },
});

function Cards() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.container}>
        <Grid container spacing={3}>
          <Grid item md={4}>
            <Card className={classes.root}>
              <CardActionArea href="/owner">
                <CardMedia
                  className={classes.media}
                  image={Owner}
                  title="Owner"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    ADMIN
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card className={classes.root}>
              <CardActionArea href="/supplier">
                <CardMedia
                  className={classes.media}
                  image={Supplier}
                  title="Supplier"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Supplier
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card className={classes.root}>
              <CardActionArea href="/transporter">
                <CardMedia
                  className={classes.media}
                  image={Transporter}
                  title="Transporter"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Transporter
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card className={classes.root}>
              <CardActionArea href="/manufacturer">
                <CardMedia
                  className={classes.media}
                  image={Manufacturer}
                  title="Manufacturer"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Manufacturer
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card className={classes.root}>
              <CardActionArea href="/wholesaler">
                <CardMedia
                  className={classes.media}
                  image={Wholesaler}
                  title="Wholesaler"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Wholesaler
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card className={classes.root}>
              <CardActionArea href="/distributor">
                <CardMedia
                  className={classes.media}
                  image={Distributer}
                  title="Distributor"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Distributor
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}

export default Cards;
